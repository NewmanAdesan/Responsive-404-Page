# Responsive-404-Page
A captivating landing page with responsive design on small, large, 2k &amp; 4k screens. The page includes an intriguing ghost animation that adds an element of surprise, along with an engaging page reveal animation that brings content to life. These eye-catching features give the landing page a lasting impression.


# Project Design: key concepts
### Ghost Floating Effect & Ghost Shadow Effect
The ghost animation in my project involves an image of a ghost along with a subtle shadow effect. <br />
To create the shadow effect, I utilized a div element with a blurred dark background.

The animation is achieved using the keyframe animation technique. <br />
The ghost image gently oscillates back and forth in a continuous loop, giving it a floating effect. <br />
At the same time, the ghost image shadow scales proportionally, adding depth and realism to the animation.
<img src=".\assets\img\ghost-float-effect.png" alt=" ghost floating effect code"  style="width: 100%; max-width: 400px; height: auto"/>
<img src=".\assets\img\ghost-shadow-effect.png" alt=" ghost shadow effect code"  style="width: 100%; max-width: 400px; height: auto"/>

### Component Reveal Animation
The component reveal animation in my project utilizes the ScrollReveal JavaScript library. This powerful library enables me to bring elements into view with smooth sliding animations. By specifying parameters such as the delay before the reveal animation, the duration of the animation, and the distance of the slide, I can precisely control how each component appears on the screen.
<img src=".\assets\img\component-reveal-animation.png" alt=" component reveal effect code"  style="width: 100%; max-width: 400px; height: auto"/>


### Responsiveness for large, 2k, 4k Screens
This project incorporates a mobile-first design approach, ensuring that the page layout is optimized for smaller screens initially. The main section of the page is initially designed as a 1-column grid, consisting of the page text, the ghost image, and the page footer.

To accommodate larger screens, such as tablets and desktops, the 1-column grid transforms into a 2-column grid. This adjustment allows for a more spacious and visually appealing layout. Additionally, the ghost image is enlarged by 2.8 times its size on mobile devices, providing a more prominent and captivating visual element.

To ensure optimal display on high-resolution screens, such as 2K and 4K monitors, we employed the CSS zoom property. By applying a zoom factor of 1.7 for 2K screens and 3.1 for 4K screens, the page appears appropriately scaled a

# Project Design: project workflow
1. **Fonts-Sizes & Colors CSS Variables:**

   - Define CSS variables for font sizes and colors using `rem` unit for fonts and `hsl` color method for colors.
   - Make the variables responsive by using media queries to adjust their values for larger screens.

2. **Font Family CSS Variables:**

   - Select a font family from Google Fonts, such as Space Grotesk.
   - Choose font styles like "regular 400," "medium 500," and "bold 700" for different elements.
   - Embed the chosen font using the `@import` rule.

3. **Configuring Base Styles:**

   - Set base styles for elements:
     - Use the "border-box" box sizing model for all elements.
     - Remove margin and padding for all elements.
     - Define font-family, font-size, font-weight, and text color for the body element.
     - Ensure responsiveness for image elements by setting `max-width` to 100%.
     - Remove list styles and text decoration for `ul` and `a` elements.

4. **Configuring Header and Nav for Mobile:**

   - Place navigation items (nav-logo, nav-menu, nav-toggle) in the header.
   - Configure styles for the nav-menu.
   - Toggle the visibility of the nav-menu by clicking the nav-toggle, achieved by changing the position using a class called `show-menu`.

5. **Configuring the Main Part of the Page for Mobile:**

   - Position the "404 text" and "404 ghost" elements using grid layout.
   - Animate the "404 ghost" and its shadow using keyframes.

6. **Configuring for Medium Screen Sizes (>727px):**

   - Ensure the navigation shows horizontally by default.
   - Hide the navigation toggle and navigation close elements.

7. **Configuring for Large Screen Sizes (>1024px):**

   - Arrange the "404 text" and "404 ghost" elements horizontally.
   - Increase the size of the "404 ghost" element.

8. **Configuring for 2k & 4k Screen Sizes (>2048px & >3840px):**

   - Utilize the `zoom` property to ensure clear content on 2k and 4k screens.

9. **Animating the Reveal of Some Elements using ScrollReveal.js:**

   - Apply ScrollReveal.js library to animate the "404 text" element, "404 ghost" element, and the footer.


