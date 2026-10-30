import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, DemoOrderInfo } from '../types/cart';
import { SAMPLE_CONFIRMATION } from '../data/sampleOrders';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'id'>) => string;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  subtotal: number;
  totalItemsCount: number;
  estimatedShipping: number;
  estimatedTax: number;
  grandTotal: number;
  lastOrder: DemoOrderInfo | null;
  submitDemoOrder: (customerData: DemoOrderInfo['customer'], shippingData: DemoOrderInfo['shipping'], eventData?: DemoOrderInfo['eventDetails']) => DemoOrderInfo;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    // Initial sample cart with 1 default line item to give immediate demonstration value, or load from session
    const saved = sessionStorage.getItem('cligraphics_demo_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    // Default starter demo item: Executive Soft-Touch Stylus Metal Pen (quantity 100)
    return [
      {
        id: 'starter-sample-pen',
        productId: 'prod-pen-01',
        productSlug: 'executive-soft-touch-stylus-metal-pen',
        productName: 'Executive Soft-Touch Stylus Metal Pen',
        categoryName: 'Pens',
        unitPrice: 1.45,
        quantity: 100,
        selectedColor: 'Midnight Navy',
        isCustomized: false,
      }
    ];
  });

  const [lastOrder, setLastOrder] = useState<DemoOrderInfo | null>(() => {
    const saved = sessionStorage.getItem('cligraphics_last_demo_order');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    sessionStorage.setItem('cligraphics_demo_cart', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (lastOrder) {
      sessionStorage.setItem('cligraphics_last_demo_order', JSON.stringify(lastOrder));
    }
  }, [lastOrder]);

  const addToCart = (newItemData: Omit<CartItem, 'id'>): string => {
    const newItemId = `item-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const fullItem: CartItem = {
      ...newItemData,
      id: newItemId,
    };

    setItems((prev) => {
      // If it's NOT customized and matches the same product and color, we can increment quantity
      if (!fullItem.isCustomized) {
        const existingIndex = prev.findIndex(
          (i) => !i.isCustomized && i.productId === fullItem.productId && i.selectedColor === fullItem.selectedColor
        );
        if (existingIndex > -1) {
          const updated = [...prev];
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + fullItem.quantity,
          };
          return updated;
        }
      }
      // Customized items are always distinct line items per Section 9.1
      return [...prev, fullItem];
    });

    return newItemId;
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const estimatedShipping = subtotal > 0 ? (subtotal > 300 ? 0 : 35.00) : 0;
  const estimatedTax = 0.00; // Sample tax label
  const grandTotal = subtotal + estimatedShipping + estimatedTax;

  const submitDemoOrder = (
    customerData: DemoOrderInfo['customer'],
    shippingData: DemoOrderInfo['shipping'],
    eventData?: DemoOrderInfo['eventDetails']
  ): DemoOrderInfo => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const completedOrder: DemoOrderInfo = {
      orderNumber: `DEMO-ORDER-2026-${randomSuffix}`,
      orderDate: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      customer: customerData,
      shipping: shippingData,
      eventDetails: eventData,
      items: [...items],
      subtotal,
      estimatedShipping,
      estimatedTax,
      total: grandTotal,
    };

    setLastOrder(completedOrder);
    clearCart();
    return completedOrder;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
        totalItemsCount,
        estimatedShipping,
        estimatedTax,
        grandTotal,
        lastOrder: lastOrder || SAMPLE_CONFIRMATION,
        submitDemoOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

