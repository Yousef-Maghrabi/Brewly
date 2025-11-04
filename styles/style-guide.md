## Structure
 - `tokens.css` => to store design tokens and fonts
 - `globals.css` => reset and importing other tools like normalize
 - `utils/` => to create classes will be used frequently like flex-center like flex-v like text-bold
 - `components/`=> to create component and use them frequently without changing the ui hierachy 
 - `src/`=> to link html with css 
 - `motion/` => to create animation or complex transitions 
 - `effects/` => to create effect that is too complex to be styled with something else -> carousel effect -> scroll effects 

## Generating Design Tokens `design tokens is variables that can keep styles consistent across your whole project`

### Primitive Values

#### Colors

- **Primary (Brown Brand):**
  - `--color-primary-100: #f6ede6`
  - `--color-primary-200: #eed9c8`
  - `--color-primary-300: #e0c2a0`
  - `--color-primary-400: #caa079`
  - `--color-primary-500: #8b5e34`
  - `--color-primary-600: #7a4f2b`
  - `--color-primary-700: #603e20`
  - `--color-primary-800: #452b14`
  - `--color-primary-900: #2b1608`

- **Secondary (Caramel Accent):**
  - `--color-secondary-100: #fff7ed`
  - `--color-secondary-200: #ffe8cc`
  - `--color-secondary-300: #ffd3a3`
  - `--color-secondary-400: #ffb66b`
  - `--color-secondary-500: #ff9a2e`
  - `--color-secondary-600: #e07f24`
  - `--color-secondary-700: #b0621b`
  - `--color-secondary-800: #7f4412`
  - `--color-secondary-900: #4f2b0a`

- **Neutral / Grayscale:**
  - `--color-neutral-100: #fafafa`
  - `--color-neutral-200: #f4f5f7`
  - `--color-neutral-300: #e6e7ea`
  - `--color-neutral-400: #d1d5db`
  - `--color-neutral-500: #9aa3ad`
  - `--color-neutral-600: #6b7280`
  - `--color-neutral-700: #4b5563`
  - `--color-neutral-800: #374151`
  - `--color-neutral-900: #1a1a1a`

- **Status / Functional Colors:**
  - `--color-warning: #f59e0b`
  - `--color-danger: #ef4444`
  - `--color-success: #22c55e`

#### Borders

- `--border-width-thin: 1px`
- `--border-width: 2px`
- `--border-width-thick: 4px`

#### Radius

- `--radius-s: 2px`
- `--radius-m: 4px`
- `--radius-l: 8px`
- `--radius-round: 50%`

#### Icons

- `--size-icon-small: 1rem`
- `--size-icon-medium: 1.5rem`
- `--size-icon-large: 2rem`

#### Breakpoints

- `--screen-xs: 480px`
- `--screen-s: 768px`
- `--screen-m: 1024px`
- `--screen-l: 1280px`

#### Layering

- `--z-default: 0`
- `--z-dropdown: 100`
- `--z-modal: 1000`
- `--z-toast: 1100`
- `--z-tooltip: 1200`

#### Transition

- `--duration-fast: 150ms`
- `--duration-medium: 300ms`
- `--duration-slow: 500ms`
- `--easing-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--easing-decelerate: cubic-bezier(0, 0, 0.2, 1)`
- `--easing-accelerate: cubic-bezier(0.4, 0, 1, 1)`

### Semantic / Alias Tokens

#### Text / Icon Colors

- `--color-text-default: var(--color-neutral-900)`
- `--color-text-primary: var(--color-primary-700)`
- `--color-text-muted: var(--color-neutral-600)`

#### Background Surfaces

- `--color-bg-default: var(--color-neutral-100)`
- `--color-bg-surface: var(--color-neutral-200)`
- `--color-bg-primary: var(--color-primary-100)`

#### Border / Divider

- `--color-border-default: var(--color-neutral-300)`
- `--color-border-muted: var(--color-neutral-400)`
- `--color-border-primary: var(--color-primary-400)`

#### Accent

- `--color-accent-default: var(--color-secondary-500)`
- `--color-accent-hover: var(--color-secondary-400)`
- `--color-accent-active: var(--color-secondary-600)`

### Dark Mode Overrides

- **Text / Icon Colors:**
  - `--color-text-default: var(--color-neutral-100)`
  - `--color-text-primary: var(--color-primary-300)`
  - `--color-text-muted: var(--color-neutral-400)`

- **Background Surfaces:**
  - `--color-bg-default: var(--color-neutral-900)`
  - `--color-bg-surface: var(--color-neutral-600)`
  - `--color-bg-primary: var(--color-primary-300)`

- **Border / Divider:**
  - `--color-border-default: var(--color-neutral-700)`
  - `--color-border-primary: var(--color-primary-300)`

## Components

### Buttons

- **Sizing:**
  - `.btn--s`: Small button with `0.25rem 0.5rem` padding.
  - `.btn--m`: Medium button with `0.5rem 1rem` padding.
  - `.btn--l`: Large button with `0.75rem 1.25rem` padding.
  - `.btn--full`: Full-width button.

- **Modes:**
  - `.btn--default`: Default button with a primary border, surface background, and muted text.
    - **Hover:** Primary border, primary background, and default text.
  - `.btn--accent`: Accent button with an accent border, accent background, and inverted text.
    - **Hover:** Accent hover border, surface background, and default text.

### Images

- **Base Image:**
  - `.img`: A block-level element with `max-width: 100%`, `height: auto`, and `object-fit: cover`.

- **Background Image:**
  - `.img_bg`: A container with a centered, cover background image.

- **Image Wrapper:**
  - `.image_wrapper`: A relative-positioned container for images, overlays, and captions.

- **Image Overlay:**
  - `.image_overlay`: An absolute-positioned overlay that appears on hover.

- **Image Caption:**
  - `.image_caption`: An absolute-positioned caption at the bottom of the image.

## Utilities

### Grid

- **Static Grid:**
  - `.layout_grid-2`: A 2-column grid with a medium gap.
  - `.layout_grid-3`: a 3-column grid with a medium gap.

- **Auto Grid:**
  - `.layout_grid-auto-200`: An auto-fit grid with a minimum column size of 200px.
  - `.layout_grid-auto-300`: An auto-fit grid with a minimum column size of 300px.

- **Dynamic Grid:**
  - `.layout_grid-dynamic`: A grid with customizable columns and rows using `--layout-columns` and `--layout-rows` variables.

### Text

- **Sizing:**
  - `.text_size-s`: Small text with a font size of 1.2rem, scaling up to 1.8rem on large screens.
  - `.text_size-m`: Medium text with a font size of 1.8rem, scaling up to 2.4rem on large screens.
  - `.text_size-l`: Large text with a font size of 2.2rem, scaling up to 3rem on large screens.

- **Weight:**
  - `.text_weight-thin`: Thin text with a font weight of 300.
  - `.text_weight-normal`: Normal text with a font weight of 500.
  - `.text_weight-thick`: Thick text with a font weight of 700.

- **Color:**
  - `.text`: Muted text color.
  - `.text-focus`: Default text color.
  - `.text-accent`: Accent text color.

### Layout

- **Containers:**
  - `.layout_container-h_2` to `.layout_container-h_6`: Horizontal grid containers with 2 to 6 columns.
  - `.layout_container-v_2` to `.layout_container-v_6`: Vertical grid containers with 2 to 6 rows.
  - `.layout_section`: A container that takes up the full viewport height.

- **Content and Spacing:**
  - `.layout_content`: A container for content.
  - `.layout_spacing`: A container for spacing.

- **Spanning:**
  - `.colspan-1` to `.colspan-6`: Spans 1 to 6 columns.
  - `.rowspan-1` to `.rowspan-6`: Spans 1 to 6 rows.

### Radius

- **Sizing:**
  - `.radius-s`: Small border radius.
  - `.radius-m`: Medium border radius.
  - `.radius-l`: Large border radius.
  - `.radius-full`: Full border radius (for circles).

### Sizing

- **Width:**
  - `.w-auto`, `.w-full`, `.w-1-2`, `.w-1-3`, etc.
  - `.w-vw-25`, `.w-vw-50`, etc.
  - `.w-100`, `.w-200`, etc.

- **Height:**
  - `.h-auto`, `.h-full`, `.h-1-2`, `.h-1-3`, etc.
  - `.h-vh-25`, `.h-vh-50`, etc.
  - `.h-100`, `.h-200`, etc.

- **Min/Max Constraints:**
  - `.min-w-0`, `.min-w-full`, `.min-h-0`, `.min-h-full`
  - `.max-w-100`, `.max-w-200`, etc.
  - `.max-h-100`, `.max-h-200`, etc.

- **Aspect Ratio:**
  - `.ratio-1-1`, `.ratio-4-3`, `.ratio-16-9`, etc.

- **Container Fit:**
  - `.fit-cover`, `.fit-contain`, `.fit-fill`, etc.

- **Flex/Grid Expansion:**
  - `.flex-grow-0`, `.flex-grow-1`, `.flex-shrink-0`, `.flex-shrink-1`

- **Responsive Sizing:**
  - `.w-responsive`, `.h-responsive`, `.max-w-responsive`

### Spacing

- **Margin:**
  - `.spacing_margin-left_s`, `.spacing_margin-left_m`, `.spacing_margin-left_l`
  - `.spacing_margin-h_s`, `.spacing_margin-h_m`, `.spacing_margin-h_l`

- **Padding:**
  - `.spacing_pad-left_s`, `.spacing_pad-left_m`, `.spacing_pad-left_l`
  - `.spacing_pad-h_s`, `.spacing_pad-h_m`, `.spacing_pad-h_l`

- **Gap:**
  - `.gap-s`, `.gap-m`, `.gap-l`

### Position

- **Position:**
  - `.position-static`, `.position-relative`, `.position-absolute`, `.position-fixed`, `.position-sticky`

- **Overflow:**
  - `.overflow-visible`, `.overflow-hidden`, `.overflow-scroll`, `.overflow-auto`, `.overflow-clip`
  - `.overflow-x-hidden`, `.overflow-y-hidden`, `.overflow-x-scroll`, `.overflow-y-scroll`

- **Inset:**
  - `.inset-0`, `.top-0`, `.right-0`, `.bottom-0`, `.left-0`

- **Z-Index:**
  - `.z-default`, `.z-dropdown`, `.z-modal`, `.z-toast`, `.z-tooltip`
