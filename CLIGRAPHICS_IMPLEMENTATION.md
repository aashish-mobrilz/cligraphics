# CliGraphics.com --- React Frontend Implementation Specification

> **Document type:** AI-agent implementation brief and build prompt\
> **Project mode:** Static, interactive UI prototype\
> **Frontend:** React + TypeScript\
> **Backend/API:** None in this phase\
> **Primary client reference:** https://www.4imprint.com\
> **Approval requirement:** Present at least two distinct visual
> directions for client selection before completing the full UI.

------------------------------------------------------------------------

## 1. Purpose and source of truth

Build a polished, responsive React frontend prototype for
**CliGraphics.com**, a promotional products and conference-supplies
website.

The purpose of this work is to demonstrate the complete customer-facing
experience expected by the client. It is **not** a production eCommerce
implementation.

This file is the implementation source of truth for the AI coding agent.
Follow the requirements in this file. Do not invent business rules,
product specifications, client content, print dimensions, payment
behavior, or backend capabilities.

### 1.1 Primary reference

The client explicitly supplied **https://www.4imprint.com** as the
primary reference website and asked that it be reviewed to better
understand the desired website.

Use 4imprint as a reference for:

-   Promotional-products storefront structure.
-   Product and category discovery.
-   Navigation and search patterns.
-   Product listing and product detail conventions.
-   Product imagery and information hierarchy.
-   The customer journey from browsing to cart and checkout.
-   Professional, product-led eCommerce presentation.

**Do not copy** 4imprint's logo, brand identity, wording, images,
proprietary assets, exact layouts, or source code. CliGraphics must have
its own visual identity. The reference is a UX and design benchmark, not
a template to clone.

The custom bag designer described in this specification is a CliGraphics
requirement. Do not assume that 4imprint has an identical feature or use
the reference as evidence for how the designer must work.

### 1.2 Client-provided brand statements

Use the following statements as supplied client content:

-   **Family Owned**
-   **Celebrating 30 Years**
-   **Established January, 1997**
-   **One source for all your conference needs**

Place "Family Owned" prominently near the top of the site, such as in an
announcement strip. Use the anniversary statement and main brand line in
the homepage hero or a clearly visible brand section.

**Content verification note:** January 1997 to January 2027 is 30 years.
Do not silently alter the client's supplied wording. If the prototype is
being presented before January 2027, flag the anniversary statement for
client confirmation rather than independently changing it.

### 1.3 Hero imagery

The client rejected the previous image concept and requested a
conference-setting stock photograph. Use a suitable licensed/approved
conference or event setting image. Prefer imagery showing conference
materials, registration setup, branded merchandise, bags, lanyards,
notebooks or event tables.

Do not use a person-focused hero image unless the client explicitly
approves it. Do not invent a stock image licence or imply that an asset
is licensed if its source is unknown. If approved imagery is not
available, use a clearly labelled placeholder and record the asset
dependency.

------------------------------------------------------------------------

## 2. Non-negotiable prototype boundaries

Everything in this phase is static or browser-side demonstration UI.

### 2.1 Allowed

-   React components and local frontend state.
-   Local TypeScript/JavaScript mock data.
-   Local images and static assets.
-   Browser file selection for temporary artwork preview.
-   Client-side search, sorting and filtering over mock data.
-   Product option selection and quantity controls.
-   Interactive canvas/editor demonstration.
-   Demo cart state.
-   Demo checkout forms.
-   Simulated order confirmation clearly marked as a prototype.
-   Responsive layouts and navigation.

### 2.2 Not allowed in this phase

-   No API calls.
-   No backend services.
-   No database.
-   No WordPress integration.
-   No WooCommerce integration.
-   No real payment gateway.
-   No real order creation.
-   No customer account authentication.
-   No server-side artwork upload or file storage.
-   No real production file generation or manufacturing workflow.
-   No claims that a real payment, order, upload or production action
    has occurred.

Do not add an API layer "for future readiness" if it results in network
calls or unnecessary abstraction. Keep data local and typed so a later
integration can be introduced cleanly.

### 2.3 Demonstration honesty

Label simulated behavior where a user could reasonably mistake it for a
real transaction. For example:

-   Checkout button: "Continue to demo checkout" or equivalent.
-   Payment section: "Demo only --- no payment will be processed."
-   Order confirmation: "Sample order confirmation --- no real order has
    been placed."
-   Artwork upload: "Previewed in this browser only; file is not
    submitted or stored."

Never show fake payment success as if a real transaction was completed.

------------------------------------------------------------------------

## 3. Client's product and service categories

Represent all nine categories in navigation and on the homepage/category
discovery area.

1.  **Bags**
2.  **Lanyards**
3.  **Drinkware**
4.  **Pens**
5.  **Apparel**
6.  **Technology**
7.  **Journals and Notebooks**
8.  **Printing** --- from single flyer sheets to web-printed
    registration brochures and program books.
9.  **Fulfillment and Direct Mail Services**

The first seven are product categories. Printing and Fulfillment/Direct
Mail are service-oriented categories and should have service
landing-page treatment rather than being forced into ordinary
product-card behavior.

Suggested sample subcategories may be used to make the prototype feel
complete, but mark them as illustrative mock content and do not present
them as client-approved inventory.

------------------------------------------------------------------------

## 4. Required visual design comparison

Before implementing the full website design, create **at least two
meaningfully different visual directions** for the client to compare and
select.

These must not be two versions of the same layout with only different
colors.

### 4.1 Option A --- Product-led promotional storefront

A clean, familiar eCommerce direction guided by 4imprint's usability
patterns:

-   Clear category navigation.
-   Product-focused homepage.
-   Prominent search and product discovery.
-   Familiar product card grid.
-   Strong product imagery and clear calls to action.
-   Conventional, easy-to-understand product detail layout.

### 4.2 Option B --- Corporate/editorial conference-supply experience

A distinct alternative with a more editorial/corporate presentation:

-   Different hero composition and content hierarchy.
-   Stronger brand-story and conference-solutions framing.
-   Different category presentation.
-   Distinct product-card treatment.
-   Different section rhythm, spacing and typography hierarchy.
-   A clear path into product discovery and the custom bag designer.

### 4.3 Comparison deliverables

For both options, create comparable previews of:

1.  Homepage.
2.  Product category/listing page.
3.  Product detail page.
4.  Bag customization entry/preview experience.

Keep the content, categories and functional scope consistent so the
client is comparing design direction, not different feature sets.

Present both concepts as clearly labelled **Option A** and **Option B**.
Include a short explanation of each direction and its key differences.
Provide a visible selection mechanism or clear review presentation so
the client can choose one.

Do not merge the two directions into a hybrid unless the client requests
it. Once the client selects a direction, apply that direction
consistently to the remaining pages and reusable components.

------------------------------------------------------------------------

## 5. Sitemap and routes

Implement the following frontend routes. Route names can be adjusted
only when necessary for consistency; do not omit core pages.

  -------------------------------------------------------------------------
  Route                     Page                    Priority
  ------------------------- ----------------------- -----------------------
  `/`                       Homepage                Required

  `/products`               All products / shop     Required

  `/category/:slug`         Category listing        Required

  `/product/:slug`          Product detail          Required

  `/customize/:productId`   Custom bag designer     Required

  `/cart`                   Demo cart               Required

  `/checkout`               Demo checkout           Required

  `/order-confirmation`     Demo confirmation       Required

  `/about`                  About CliGraphics       Required

  `/services`               Services overview       Required

  `/services/:slug`         Service detail          Optional if needed for
                                                    a complete presentation

  `/contact`                Contact page            Required
  -------------------------------------------------------------------------

Account/login pages are not required unless the selected visual concept
needs a static visual representation. Do not implement authentication.

------------------------------------------------------------------------

## 6. Homepage content and section requirements

Build the homepage with these sections. The selected design direction
may change their visual arrangement, but not remove the required
content.

1.  **Announcement strip:** "Family Owned".
2.  **Header:** CliGraphics logo/wordmark, navigation, product
    discovery, search UI and cart entry.
3.  **Hero:** conference-setting visual, anniversary statement, "One
    source for all your conference needs", and clear CTA(s).
4.  **Category discovery:** all nine categories.
5.  **Featured products:** static sample product cards from the product
    categories.
6.  **Custom bag feature:** explain upload → position/edit → preview →
    confirm → add to cart.
7.  **Printing services:** explain the breadth of printing support,
    including flyers, registration brochures and program books.
8.  **Fulfillment and direct mail:** service summary and CTA.
9.  **Company/trust section:** family-owned positioning and
    client-approved company information only.
10. **Footer:** category links, services, contact, and legal/navigation
    placeholders as appropriate.

Do not invent years in business, customer counts, client logos,
testimonials, awards, certifications, guarantees, shipping promises or
contact details. Use labelled placeholders where the client has not
supplied the information.

------------------------------------------------------------------------

## 7. Product listing and product detail UI

### 7.1 Product listing

-   Display local mock product data.
-   Include category title and short introductory copy.
-   Provide client-side search/filter/sort only where it improves the
    demonstration.
-   Include product image, name, short description and illustrative
    price.
-   Make the price clearly sample/illustrative if it is not
    client-supplied.
-   Use consistent product cards.
-   Include empty, no-results and reset-filter states.
-   Use responsive grids.

### 7.2 Product detail

-   Product image gallery.
-   Product title and description.
-   Static sample price or "Request pricing" where price is unknown.
-   Color/size/variation controls where relevant to the sample product.
-   Quantity selector.
-   Customization CTA for eligible bag products.
-   Clear indication of what can be customized.
-   Related products or category navigation.

Do not invent actual product SKUs, stock availability, pricing rules,
product dimensions, material claims or customization limitations. Use
clearly labelled mock data.

------------------------------------------------------------------------

## 8. Custom bag designer --- core interactive demonstration

This is the key differentiating feature of the requested website
prototype.

The designer must be interactive, not a static screenshot.

### 8.1 Customer flow

`Select Bag → Choose Options → Upload Artwork → Preview on Bag → Adjust Design → Confirm Design → Add to Demo Cart`

### 8.2 Designer interface

Recommended layout:

-   **Top bar:** selected bag name, selected color/view, back/exit
    navigation.
-   **Left toolbar:** upload artwork, add text if included, switch view.
-   **Center canvas:** bag mockup, printable area and artwork preview.
-   **Right properties panel:** selected artwork controls.
-   **Bottom/action area:** quality notice, design summary, confirm and
    add-to-cart action.

### 8.3 Required browser-side interactions

-   Select a sample bag model.
-   Switch between Front and Back where configured.
-   Select a sample bag color where mockups are available.
-   Select a local image file using the browser file picker.
-   Show the uploaded image over the bag mockup.
-   Move/reposition artwork.
-   Resize artwork.
-   Rotate artwork.
-   Remove or replace artwork.
-   Keep artwork within the visual printable boundary.
-   Show a clear design preview.
-   Confirm the current design.
-   Add the configured demo item to the local cart state.

If text customization is included, make it functional with editable
text, basic font-size control and positioning. Do not claim advanced
typography, print color management or production accuracy unless
actually implemented.

### 8.4 Artwork format and quality notes

The client listed PNG, JPG, SVG and PDF. For this static prototype:

-   Implement image preview for formats supported by the browser and
    chosen editor.
-   Do not claim that PDF/SVG are fully editable or export-ready unless
    that behavior has been tested.
-   If a format cannot be previewed reliably, show a clear
    unsupported-preview message and preserve the intended UX with a
    sample placeholder.
-   Client-side file-size and file-type checks are for demonstration
    only.
-   Do not claim authoritative DPI or print-readiness validation.
-   A meaningful DPI estimate requires known physical print dimensions.
    Those dimensions have not been supplied in this brief.
-   Display a neutral warning such as "Print quality will need
    confirmation against final production specifications" where
    appropriate.

### 8.5 Bag model configuration

The client scope mentions up to 10 bag models and views such as Front
and Back, with printable bounding boxes and strap overlay masks where
needed.

For the prototype:

-   Build a configuration-driven designer.
-   Include one fully interactive sample bag model as the minimum proof
    of concept.
-   Represent additional bag models using static configuration and
    sample assets when available.
-   Do not fabricate accurate print-area measurements.
-   If exact bag images, front/back images, print dimensions or masks
    are missing, use clearly labelled demonstration assets and list them
    as client dependencies.
-   Keep each bag model's views, print area and overlay assets
    independently configurable.

### 8.6 Designer state

Represent design state locally, including:

-   Product/model identifier.
-   Selected view.
-   Selected color/variation.
-   Uploaded local preview asset.
-   Artwork position.
-   Artwork width/height or scale.
-   Rotation.
-   Optional text and text settings.
-   Confirmation state.
-   Preview thumbnail/reference for the demo cart.

Use browser object URLs for temporary image previews where appropriate.
Revoke object URLs when no longer needed. Do not imply that these files
are uploaded to a server or persist across devices.

------------------------------------------------------------------------

## 9. Demo cart, checkout and confirmation

### 9.1 Cart

-   Add a selected sample product to local React state.
-   Show product image, name, selected variation and quantity.
-   Show the custom design preview for customized items.
-   Allow quantity changes and removal.
-   Support more than one line item.
-   Keep separate customizations as separate line items, even when the
    same bag model is selected twice.
-   Use illustrative prices and totals only.

### 9.2 Checkout

Create a polished checkout UI with:

-   Contact information form.
-   Shipping information form.
-   Order summary.
-   Design preview summary.
-   Illustrative shipping/tax rows if needed, clearly marked as sample.
-   Demo payment section with an explicit no-payment notice.
-   Client-side form validation for presentation purposes.

Do not collect or transmit real payment credentials. Do not integrate
Stripe, PayPal or any payment provider.

### 9.3 Order confirmation

After the user completes the demo flow, show a clearly labelled sample
confirmation screen.

Do not create a real order number that could be mistaken for a real
order. Use a visible sample label such as "DEMO-ORDER-001" and explain
that no order was submitted.

------------------------------------------------------------------------

## 10. Recommended React implementation

Use:

-   React.
-   TypeScript.
-   Vite.
-   React Router.
-   Tailwind CSS or a consistent CSS module approach.
-   Lucide React icons.
-   Local TypeScript mock data.
-   React state or Zustand for client-side demo state.

Choose the simplest maintainable implementation. Do not add libraries
without a concrete need.

### 10.1 Suggested project structure

``` text
src/
  app/
    App.tsx
    router.tsx
  assets/
    images/
    products/
    bags/
    icons/
  components/
    layout/
    navigation/
    common/
    product/
    customizer/
    cart/
    checkout/
  data/
    categories.ts
    products.ts
    services.ts
    designerModels.ts
    sampleOrders.ts
  features/
    catalog/
    product/
    designer/
    cart/
    checkout/
  pages/
    HomePage.tsx
    ProductsPage.tsx
    CategoryPage.tsx
    ProductDetailPage.tsx
    CustomizerPage.tsx
    CartPage.tsx
    CheckoutPage.tsx
    OrderConfirmationPage.tsx
    AboutPage.tsx
    ServicesPage.tsx
    ContactPage.tsx
  store/
    cartStore.ts
    designerStore.ts
  styles/
    globals.css
    tokens.css
  types/
    category.ts
    product.ts
    designer.ts
    cart.ts
  utils/
    formatters.ts
    image.ts
```

Adjust the structure only when the project has a clear reason to do so.
Avoid unnecessary folders and abstractions.

### 10.2 Reusable components

Build reusable components where the same UI or behavior appears more
than once:

-   `AnnouncementBar`
-   `SiteHeader`
-   `DesktopNavigation`
-   `MobileNavigation`
-   `SiteFooter`
-   `HeroBanner`
-   `CategoryCard`
-   `CategoryGrid`
-   `ProductCard`
-   `ProductGrid`
-   `ProductFilters`
-   `ProductGallery`
-   `ProductVariantSelector`
-   `QuantitySelector`
-   `CustomizerToolbar`
-   `DesignCanvas`
-   `ProductViewSwitcher`
-   `ArtworkUploader`
-   `DesignPropertiesPanel`
-   `DesignPreview`
-   `CartLineItem`
-   `CartSummary`
-   `CheckoutForm`
-   `OrderSummary`
-   `DemoOrderConfirmation`

Do not create a separate component for every small text wrapper or
one-off element. Reuse should improve consistency, not make the code
unnecessarily complex.

------------------------------------------------------------------------

## 11. Static mock-data rules

Centralize all sample content. Do not scatter product names, prices,
category names or product configuration across page components.

Example category shape:

``` ts
export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  type: "product" | "service";
};
```

Example product shape:

``` ts
export type Product = {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  description: string;
  images: string[];
  samplePrice?: number;
  priceLabel?: string;
  colors?: string[];
  sizes?: string[];
  customizable: boolean;
  designerModelId?: string;
};
```

Example designer configuration shape:

``` ts
export type DesignerView = {
  id: "front" | "back";
  label: string;
  mockupImage: string;
  printArea: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  overlayImage?: string;
};

export type DesignerModel = {
  id: string;
  productId: string;
  views: DesignerView[];
  availableColors: string[];
};
```

The numeric print-area values above are structural examples only. They
are not real production measurements. Use demonstration values only when
clearly labelled and do not claim physical accuracy.

------------------------------------------------------------------------

## 12. Visual design and responsive requirements

-   Professional, credible promotional-products storefront.
-   Strong product imagery and clear category discovery.
-   Consistent typography, spacing, colors, buttons and card treatments.
-   Use CliGraphics branding once supplied.
-   Avoid generic AI-generated dashboard styling for a customer-facing
    retail website.
-   Avoid excessive gradients, glass effects, oversized decorative
    elements or animations that distract from product discovery.
-   Keep product imagery consistent in aspect ratio and presentation.
-   Use clear hover, focus, active, disabled and loading states.
-   Make the mobile menu and designer controls usable with touch.
-   On mobile, convert side panels into drawers, accordions or stacked
    controls as appropriate.
-   Test at narrow mobile, tablet and desktop widths.
-   Ensure keyboard focus, labels, contrast and alt text are considered.

Do not invent brand colors or claim that a color palette is
client-approved. If no brand system is supplied, propose a restrained
provisional palette and label it as a design proposal.

------------------------------------------------------------------------

## 13. AI-agent execution rules to minimize hallucination

These instructions are mandatory.

### 13.1 Evidence and assumption discipline

1.  Use only requirements stated in this file or assets supplied by the
    client.
2.  Do not invent client-approved facts, contact information,
    testimonials, awards, product specifications, dimensions, prices,
    stock levels or policies.
3.  If a required detail is missing, use a clearly labelled placeholder
    or record it under "Open Questions / Client Dependencies".
4.  Distinguish between:
    -   **Client-provided requirement**
    -   **Design recommendation**
    -   **Illustrative mock data**
    -   **Unconfirmed assumption**
5.  Do not turn illustrative examples into factual website copy.
6.  Do not silently resolve conflicting client statements. Flag the
    conflict.
7.  Do not claim a feature is implemented unless it works in the running
    prototype.

### 13.2 Reference discipline

1.  Treat 4imprint.com as the primary reference specified by the client.
2.  Use it for UX patterns and storefront conventions only.
3.  Do not claim to have inspected a page or feature that has not
    actually been reviewed.
4.  If live reference access is unavailable, state that the
    implementation is based on the client's named reference and
    documented requirements, and list any unverified observations.
5.  Do not copy 4imprint branding, images, wording, proprietary assets
    or exact layouts.

### 13.3 Scope discipline

1.  No APIs, backend, database, WordPress, WooCommerce or payment
    integration.
2.  Do not add authentication or real order processing.
3.  Do not introduce a third-party service requiring credentials.
4.  Do not create production file export claims.
5.  All data must be local mock data.
6.  All interactive flows must remain within the browser.

### 13.4 Coding discipline

1.  Inspect the existing project before changing files.
2.  Preserve working code and project conventions where possible.
3.  Do not replace the project setup without explaining why it is
    necessary.
4.  Avoid unnecessary dependencies.
5.  Keep TypeScript types explicit for shared data structures.
6.  Keep mock data separate from UI components.
7.  Build and test routes incrementally.
8.  Do not leave dead buttons, non-functional links or controls that
    look interactive but do nothing.
9.  Use accessible labels and keyboard-operable controls.
10. Check console errors and broken asset paths before declaring
    completion.

### 13.5 Change control

Before making a change that alters scope, page structure, content
meaning, product behavior or visual direction:

-   State what requirement is affected.
-   Explain why the change is needed.
-   Identify whether it is a recommendation or a client requirement.
-   Do not silently add the change.

------------------------------------------------------------------------

## 14. Open questions and client dependencies

Record missing inputs rather than inventing answers.

-   Approved CliGraphics logo and brand assets.
-   Approved brand colors and fonts, if available.
-   Conference-setting hero photograph and usage permission.
-   Approved product photography for each category.
-   Product names, descriptions, prices and variations.
-   Up to 10 bag model mockups.
-   Front and back images for each applicable bag.
-   Accurate printable area dimensions and coordinates.
-   Strap/handle overlay or mask assets where required.
-   Supported file formats and final production specifications.
-   Whether text customization is required.
-   Whether the final product customization will apply to bags only or
    additional categories later.
-   Whether the anniversary statement should be displayed exactly as
    supplied for the presentation date.

Use placeholders for missing inputs. Do not block the whole prototype
when a clearly labelled placeholder can demonstrate the layout.

------------------------------------------------------------------------

## 15. Acceptance checklist

The prototype is ready for client review when:

-   [ ] Two distinct visual directions are presented for client
    comparison.
-   [ ] Both options include comparable homepage, category, product
    detail and customizer previews.
-   [ ] The client can identify/select Option A or Option B.
-   [ ] The chosen design direction is applied consistently across the
    prototype.
-   [ ] "Family Owned" appears near the top of the site.
-   [ ] Anniversary and conference messaging are included as supplied.
-   [ ] The primary 4imprint reference is reflected in product discovery
    and storefront UX without copying it.
-   [ ] All nine categories are represented.
-   [ ] Printing and fulfillment/direct mail are presented as services.
-   [ ] Product listing and product detail pages are navigable.
-   [ ] At least one bag customizer works interactively in the browser.
-   [ ] Artwork can be selected locally and previewed on the bag.
-   [ ] Artwork can be moved, resized and rotated.
-   [ ] Front/back switching works for the configured sample model.
-   [ ] Design preview is visible in the demo cart.
-   [ ] Cart supports adding, removing and updating demo items.
-   [ ] Checkout is clearly marked as a demonstration.
-   [ ] No real payment or order is processed.
-   [ ] All primary routes and navigation links work.
-   [ ] Mobile, tablet and desktop layouts are reviewed.
-   [ ] No API or backend integration is present.
-   [ ] Missing client assets and assumptions are documented.
-   [ ] No unsupported claims or invented business facts appear in the
    UI.

------------------------------------------------------------------------

## 16. Supporting master prompt for the AI coding agent

Copy the prompt below into the coding agent after placing this file in
the project root as `CLIGRAPHICS_IMPLEMENTATION.md`.

``` text
You are implementing the CliGraphics.com React frontend prototype.

FIRST: Read the complete CLIGRAPHICS_IMPLEMENTATION.md file. Treat it as the single source of truth for this task.

PROJECT GOAL
Create a polished, responsive, interactive static React + TypeScript prototype for CliGraphics.com, a promotional products and conference-supplies website.

PRIMARY CLIENT REFERENCE
The client explicitly supplied https://www.4imprint.com as the primary reference. Use it to guide storefront structure, product discovery, navigation, category browsing, product cards, product detail conventions and the customer shopping journey. Do not copy its brand, content, images, proprietary assets or exact page layouts.

STRICT SCOPE
This is a static UI prototype only.
- No APIs.
- No backend.
- No database.
- No WordPress or WooCommerce.
- No payment integration.
- No real order creation.
- No server-side file uploads.
- Use local mock data and browser-side React state only.
- Clearly label simulated checkout and order confirmation.

MANDATORY DESIGN APPROVAL
Before completing the full site, create at least two genuinely different visual design directions:
A. Product-led promotional merchandise storefront guided by 4imprint's UX conventions.
B. A distinctly different corporate/editorial conference-supply presentation.
Show comparable previews for the homepage, category/listing page, product detail page and bag customizer experience. Keep features and content consistent between options. Make the options easy for the client to compare and select. Do not merge them unless asked.

CLIENT CONTENT
Include:
- Family Owned
- Celebrating 30 Years
- Established January, 1997
- One source for all your conference needs

Use a conference-setting hero image. Do not invent client-approved brand colors, company facts, product specifications, prices, testimonials or contact information. Use labelled placeholders for missing information.

CATEGORIES
Bags; Lanyards; Drinkware; Pens; Apparel; Technology; Journals and Notebooks; Printing; Fulfillment and Direct Mail Services.
Present Printing and Fulfillment/Direct Mail as services rather than ordinary merchandise categories.

CORE FUNCTIONAL DEMONSTRATION
Build at least one interactive bag customizer:
- Select a sample bag.
- Select front/back view where configured.
- Select sample color where configured.
- Choose a local image file.
- Preview it on the bag mockup.
- Move, resize and rotate the artwork.
- Keep it within the visual printable area.
- Confirm the design.
- Add it to the local demo cart with its preview.

The designer must be an actual browser-side interaction, not a static image. Do not claim production accuracy, authoritative DPI validation or print-ready export unless truly implemented and supported by supplied specifications.

IMPLEMENTATION
Use React + TypeScript, a clear route structure, reusable components and centralized local mock data. Follow the folder structure and acceptance criteria in CLIGRAPHICS_IMPLEMENTATION.md. Use the simplest maintainable libraries. Do not add dependencies without a clear requirement.

WORK METHOD
1. Inspect the existing repository and report its current framework, scripts and structure.
2. Identify assets already supplied. Do not invent paths or assume assets exist.
3. Summarize the implementation plan and any blockers/unknowns.
4. Create the two design directions first.
5. Wait for client/design direction selection if this is a collaborative approval workflow. If instructed to continue autonomously, keep both options available and do not silently choose one.
6. Implement the selected direction across the required routes.
7. Implement the static product catalog and bag customizer.
8. Implement demo cart, checkout and confirmation.
9. Test all routes, controls, responsive states and interactions.
10. Report what is implemented, what is simulated, what remains dependent on client assets, and any known limitations.

HALLUCINATION PREVENTION
- Do not invent facts.
- Do not treat sample data as real client data.
- Do not pretend an API, payment, upload or order exists.
- Do not claim to have inspected 4imprint pages that you did not inspect.
- If information is missing, use a labelled placeholder and record the dependency.
- If a requirement is ambiguous, state the ambiguity rather than guessing.
- Do not silently expand scope.
- Do not mark incomplete features as complete.

DEFINITION OF DONE
The prototype must satisfy the acceptance checklist in CLIGRAPHICS_IMPLEMENTATION.md. Every visible control should work or be clearly presented as non-interactive. There must be no backend/API integration. The customizer must demonstrate local artwork preview and editing. The UI must be responsive and free of broken routes, dead links and obvious console errors.

At completion, provide:
- Summary of implemented pages and interactions.
- Confirmation that two visual directions were produced.
- List of mock data used.
- List of client assets or information still needed.
- List of simulated/non-production features.
- Test results and known limitations.
```

------------------------------------------------------------------------

## 17. Final instruction

Build the prototype to demonstrate the client's expected website
experience, not to simulate a fully operational commerce platform.
Prioritize clarity, fidelity to the documented client requirements,
visual quality, responsive behavior and a working browser-side bag
customization demonstration.

When uncertain, **do not guess**. Use a labelled placeholder, document
the dependency and ask for confirmation where the decision materially
changes the design or behavior.
