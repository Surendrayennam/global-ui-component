# Adding SVG Icons

SVGs can be added as a stand-alone graphic or as an icon to accompany text. Ths approach turns an SVG file into a React component which takes in the usual SVG/HTML attributes as props and outputs the SVG markup as JSX.

**Important** — Don't use the following syntax. It currently doesn't work in SSR. (However, if you want to fix it, have at it!)

```js
import { ReactComponent as Logo } from './logo.svg';
```

## 1. Optimize SVG File

### Open the `.svg` file in your IDE. It should look something like this:

```js
<?xml version="1.0" encoding="UTF-8"?>
<svg width="16px" height="21px"  version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>Simple Shape</title>
    <g id="SectionName" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M0,13 L0,0 L13,0 L13,6 C16.8659932, ... 13 L0,13 Z" id="Combined-Shape" fill="#D8D8D8"></path>
    </g>
</svg>
```

### Clean up

Use a utility like SVGOMG, https://jakearchibald.github.io/svgomg/. Be sure to:

-   `prettify markup`.
-   `Prefer viewBox to width/height`

Otherwise, default settings are ususally fine.

### It now should look like this:

```js
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 21">
    <path
        d="M0,13 L0,0 L13,0 L13,6 C16.8659932, ... 13 L0,13 Z"
        fill="#D8D8D8"
        fill-rule="evenodd"
    />
</svg>
```

If there's a stroke property (e.g., `stroke="#FF0000" stroke-width="1"`), reject the graphic. For Icons, there should only be a fill value.

## 2. Create a react component

Copy and paste the following code to an empty `.js` file.

```js
import React from 'react';

const SVG = ({ ...props }) => (
    <svg
        viewBox="0 0 16 18"
        {...props}
        preserveAspectRatio
        xmlns="http://www.w3.org/2000/svg">
        <title>{/*  Title is Optional */}</title>

        {/* PATH GOES HERE
            example:
            <path
                fill={props.fill}
                d="M16,8.47519409 ... Z"/>

        */}
    </svg>
);

export default SVG;
```

Save it in the `icons` folder.

```js
src / components / Icon / icons;
```

## 3. Get icon markup

From the optimized svg file, copy any `<path />` tags from within the `<svg>` tag and paste in the new icon component. Move the `fill` declaration to the beginning, change it's value to `{props.fill}`. If there's a `fill-rule`, remove it. The component should now look like this:

```js
const SVG = ({ ...props }) => (
    <svg
        viewBox="0 0 16 18"
        {...props}
        preserveAspectRatio
        xmlns="http://www.w3.org/2000/svg">
        <title>Simple Shape</title>
        <path
            fill={props.fill}
            d="M0,13 L0,0 L13,0 L13,6 C16.8659932, ... 13 L0,13 Z"
        />
    </svg>
);
```

## 4. Import the component into `Icon`

Open `Icon/index.js`,

-   Import the new file from the icons folder.

```js
import NewIcon from './icons/NewIocn';
```

-   Add it to the `ICON_NAMES` object

```js
New_Icon: 'new-icon',
```

-   Add another `case` statement.

```js
case ICON_NAMES.NEW_ICON:
    return <NewIcon {...props} />;
```

## 4. Import and render `NewIcon`

When importing the new icon, besure to include the `ICON_NAMES` object

```js
import Icon, { ICON_NAMES } from './components/Icon';
```

```js
<Icon name={ICON_NAMES.NEW_ICON} className="new-icon" />
```

## FYI

The icon size and fill color should be determined by CSS.

For more information on SVGs checkout Sara Souedan site: https://www.sarasoueidan.com/tags/svg/

To learn more about SVG creation and exporting specifically: https://www.sarasoueidan.com/blog/svg-tips-for-designers/
