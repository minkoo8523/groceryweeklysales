# Blueprint: Grocery Weekly Sales

## Overview

This document outlines the design and implementation of the Grocery Weekly Sales web application.

## Project Outline

### Initial Version

*   **HTML (`index.html`):** A basic HTML structure (originally Powerball Number Generator).
*   **CSS (`style.css`):** Styling for the application layout.
*   **JavaScript (`main.js`):** Logic for the application.

### Current State

*   **Removed Features:**
    *   Removed the "Generate Powerball Game" button and the result numbers display from [index.html](file:///workspaces/groceryweeklysales/index.html).
    *   Cleared all related JavaScript random number generation and DOM manipulation logic from [main.js](file:///workspaces/groceryweeklysales/main.js).
    *   Removed styling for the generator button and ball items from [style.css](file:///workspaces/groceryweeklysales/style.css).

*   **Implement Navigation & Mart Pages (Completed):**
    *   Created a horizontal navigation bar in `index.html` with links for "Home", "H Mart", "Hannam Mart", and "Lotte Plaza Market".
    *   Created three new interactive weekly sales pages: [hmart.html](file:///workspaces/groceryweeklysales/hmart.html), [hannam.html](file:///workspaces/groceryweeklysales/hannam.html), and [lotte.html](file:///workspaces/groceryweeklysales/lotte.html).
    *   Ensured all pages share the exact same `<h1>Grocery Weekly Sales</h1>` header and horizontal navigation bar.
    *   Implemented active state styling highlighting the current page link (each mart has its own signature brand color: rose for H Mart, emerald for Hannam Mart, amber for Lotte Plaza Market).
    *   Added modern grocery item grid cards displaying item category, name, discounted/regular price, a custom discount badge, and interactive add-to-list buttons.
    *   Added interactive shopping list toggle states in [main.js](file:///workspaces/groceryweeklysales/main.js).
    *   Polished look and feel using custom typography, transitions, shadows, and responsive designs in [style.css](file:///workspaces/groceryweeklysales/style.css).

*   **H Mart Live Flyer Integration (Completed):**
    *   Scraped and extracted the exact image URLs representing H Mart's live weekly flyers for New York and New Jersey from their official site.
    *   Rebuilt [hmart.html](file:///workspaces/groceryweeklysales/hmart.html) with a flyer tab-switching viewer that displays the five actual live flyer assets (English, Chinese NY, Chinese NJ, Houseware Sale, and 40th Anniversary Sale).
    *   Added dynamic tab-switching interactive logic in [main.js](file:///workspaces/groceryweeklysales/main.js) and custom styles in [style.css](file:///workspaces/groceryweeklysales/style.css) for responsive flyer image display and actions (e.g., viewing full-size images and linking to the official site).





