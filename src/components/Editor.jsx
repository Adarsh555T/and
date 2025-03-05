import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import gjsCustomCode from "grapesjs-custom-code";
import gjsTabs from "grapesjs-tabs";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import gjsTuiImageEditor from "grapesjs-tui-image-editor";
import './custom-theme.css';

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = grapesjs.init({
        container: "#gjs",
        height: "100vh",
        fromElement: true,
        storageManager: false,
        plugins: [gjsPresetWebpage, gjsCustomCode, gjsTabs, gjsBlocksBasic, gjsTuiImageEditor],
        pluginsOpts: {
          "gjs-preset-webpage": {}
        },
        blockManager: {
          appendTo: "#blocks",
          blocks: [
            {
              id: "container",
              label: `<div><i class="fa fa-clone" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Div</h2></div>`,
              content: `<div class="drop-zone" style="padding:20px; border: 2px dashed #007bff; min-height: 150px;"></div>`,
            },
            {
              id: "text",
              label: "Text",
              content: `<p class="draggable-text" style="color: black; font-size: 16px;">Editable Text</p>`,
            },
            {
              id: "image",
              label: `<div><i class="fa fa-picture-o" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Image</h2></div>`,
              content: `<img class="draggable-img" src="https://via.placeholder.com/150" style="width:100px;"/>`,
            },
            {
              label: `<div><i class="fa fa-folder-open-o" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Navbar</h2></div>`,
              category: "Components",
              content: `
               <nav style="display:flex; justify-content:space-between; padding:10px; background:#333; color:#fff;">
        <h2>My Logo</h2>
        <ul style="display:flex; gap:20px; list-style:none;">
          <li><a href="#" style="color:#fff;">Home</a></li>
          <li><a href="#" style="color:#fff;">About</a></li>
          <li><a href="#" style="color:#fff;">Products</a></li>
          <li><a href="#" style="color:#fff;">Contact</a></li>
        </ul>
      </nav>
              `,
            },
            {
              label: `<div><i class="fa fa-folder-open-o" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Hero</h2></div>`,
              category: "Components",
              content: `
                <section style="padding:50px; text-align:center; background:#f4f4f4;">
                  <h1>Welcome to My Website</h1>
                  <p>This is a pre-built landing page template.</p>
                  <button style="padding:10px 20px; background:#007bff; color:#fff; border:none;">Get Started</button>
                </section>
              `,
            },
            {
              label: `<div><i class="fa fa-folder-open-o" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Products</h2></div>`,
              category: "Components",
              content: `
               <section style="padding:50px; text-align:center;">
        <h2>Our Products</h2>
        <div style="display:flex; gap:20px; justify-content:center;">
          <div style="padding:20px; border:1px solid #ddd;">
            <img src="https://via.placeholder.com/150" />
            <p>Product 1</p>
          </div>
          <div style="padding:20px; border:1px solid #ddd;">
            <img src="https://via.placeholder.com/150" />
            <p>Product 2</p>
          </div>
          <div style="padding:20px; border:1px solid #ddd;">
            <img src="https://via.placeholder.com/150" />
            <p>Product 3</p>
          </div>
        </div>
      </section>
              `,
            },
            {
              label: `<div><i class="fa fa-folder-open-o" style="font-size: 50px;" aria-hidden="true"></i><br><h2>About Us</h2></div>`,
              category: "Components",
              content: `
                   <section style="padding:50px; text-align:center; background:#f4f4f4;">
        <h2>About Us</h2>
        <p>We are a company that provides amazing products and services.</p>
      </section>
              `,
            },
            {
              label: `<div><i class="fa fa-folder-open-o" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Contact</h2></div>`,
              category: "Components",
              content: `
                 <section style="padding:50px; text-align:center; background:#e3e3e3;">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" style="padding:10px; margin:5px; width:80%;" />
          <input type="email" placeholder="Your Email" style="padding:10px; margin:5px; width:80%;" />
          <textarea placeholder="Your Message" style="padding:10px; margin:5px; width:80%;"></textarea>
          <button style="padding:10px 20px; background:#007bff; color:#fff; border:none;">Send</button>
        </form>
      </section>
              `,
            },
            {
              label: `<div><i class="fa fa-folder-open-o" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Footer</h2></div>`,
              category: "Components",
              content: `
                 <footer style="padding:20px; text-align:center; background:#222; color:#fff;">
        <p>© 2025 My Company. All rights reserved.</p>
      </footer>
              `,
            },
            {
              label: `<div><i class="fa fa-folder" style="font-size: 50px;" aria-hidden="true"></i><br><h2>Contact2</h2></div>`,
              category: "Components",
              content: `
              <style>
              .contact-section1 {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;

}

.contact-section1 h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: black;
    -webkit-text-stroke: 0.5px #000000;
    font-family: "Audiowide";
}

.contact-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.contact-info,
.contact-form {
    flex: 1 1 45%;
    min-width: 300px;
}

.contact-info {
    font-size: 1rem;
}

.contact-info h2 {
    margin-bottom: 15px;
    font-size: 1.8rem;
    color: #555;
    color: black;
    -webkit-text-stroke: 0.5px #000000;
}

.contact-info p {
    margin: 10px 0;
}



.contact-form {
    font-size: 1rem;
}

.contact-form label {
    display: block;
    margin: 10px 0 5px;
    font-weight: bold;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

.contact-form button {
    background-color: #ff863fba;
    color: #000;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.contact-form button:hover {
    background-color: #dbcac0ba;
}

.contact button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
              </style>
                  <section class="contact-section1" id="Contact">
        <h1>Contact Us</h1>
        <div class="contact-container">
    
            <div class="contact-info">
                <h2>Get in Touch</h2>
                <p>Feel free to reach out to us with any questions or concerns. We're here to help!</p>
                <p><strong>Email:</strong> anilbhai@gmail.com</p>
                <p><strong>Phone:</strong> 8488821106</p>
                <p><strong>Address:</strong>Plot No. 1 Bharat Nivash, Near Udhna Academy College Ranchhod Nagar, Harinagar-2, Harinagar, Udhana, Surat, Gujarat 394220</p>
            </div>
            <div class="contact-form">
                <form action="#" method="post">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>
    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="number">Phone Number:</label>
                    <input type="number" id="mobilenumber" name="mobilenumber">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
    
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </section>
              `,
            },

          ],
        },

      });


      // Make the container div a restricted drop zone
      editor.DomComponents.addType("drop-zone", {
        model: {
          defaults: {
            droppable: ".draggable-text, .draggable-img", // Only allow text and images
          },
        },
      });
 
      editor.addStyle(`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes slideInLeft { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }
      `);
      // Get the Style Manager
      const sm = editor.StyleManager;

      // Add a new Flexbox section
      sm.addSector("flexbox", {
        name: "Flexbox",
        open: false,
        buildProps: ["display", "justify-content", "align-items", "flex-direction", "flex-wrap"],
      });

      // Add Justify-Content Property
      sm.addProperty("flexbox", {
        name: "Justify Content",
        property: "justify-content",
        type: "radio",
        defaults: "flex-start",
        options: [
          { value: "flex-start", name: "Start" },
          { value: "center", name: "Center" },
          { value: "flex-end", name: "End" },
        ],
      });

      // Add Justify-Content Property
      sm.addProperty("flexbox", {
        name: "Justify Content2",
        property: "justify-content",
        type: "radio",
        defaults: "flex-start",
        options: [
          { value: "space-between", name: "Space Between" },
          { value: "space-around", name: "Space Around" },
          { value: "space-evenly", name: "Space Evenly" },
        ],
      });

      // Add Align-Items Property
      sm.addProperty("flexbox", {
        name: "Align Items",
        property: "align-items",
        type: "radio",
        defaults: "stretch",
        options: [
          { value: "flex-start", name: "Start" },
          { value: "center", name: "Center" },
        ],
      });
      // Add Align-Items Property
      sm.addProperty("flexbox", {
        name: "Align Items2",
        property: "align-items",
        type: "radio",
        defaults: "stretch",
        options: [
          { value: "flex-end", name: "End" },
          { value: "stretch", name: "Stretch" },
          { value: "baseline", name: "Baseline" },
        ],
      });
      // Add an Animation Section
      sm.addSector("animation", {
        name: "Animation",
        open: false,
        buildProps: ["animation-name", "animation-duration", "animation-delay", "animation-iteration-count"],
      });

      // Add Animation Name Property
      sm.addProperty("animation", {
        name: "Animation Name",
        property: "animation-name",
        type: "select",
        defaults: "none",
        options: [
          { value: "none", name: "None" },
          { value: "fadeIn", name: "Fade In" },
          { value: "fadeOut", name: "Fade Out" },
        ],
      });

      sm.addProperty("animation", {
        name: "Animation Name2",
        property: "animation-name",
        type: "select",
        defaults: "none",
        options: [
          { value: "slideInLeft", name: "Slide In Left" },
          { value: "slideInRight", name: "Slide In Right" },
          { value: "bounce", name: "Bounce" },
          { value: "shake", name: "Shake" },
        ],
      });
      // Add Animation Duration Property
      sm.addProperty("animation", {
        name: "Duration",
        property: "animation-duration",
        type: "select",
        defaults: "1s",
        options: [
          { value: "0.5s", name: "0.5s" },
          { value: "1s", name: "1s" },
          { value: "2s", name: "2s" },
          { value: "3s", name: "3s" },
        ],
      });

      // Add Animation Delay Property
      sm.addProperty("animation", {
        name: "Delay",
        property: "animation-delay",
        type: "select",
        defaults: "0s",
        options: [
          { value: "0s", name: "0s" },
          { value: "0.5s", name: "0.5s" },
          { value: "1s", name: "1s" },
          { value: "2s", name: "2s" },
        ],
      });

      // Add Animation Iteration Property
      sm.addProperty("animation", {
        name: "Iteration",
        property: "animation-iteration-count",
        type: "select",
        defaults: "1",
        options: [
          { value: "1", name: "Once" },
          { value: "infinite", name: "Infinite" },
        ],
      });

      editorRef.current = editor;
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar for Blocks */}
      <div>
        <h1 style={{ fontFamily: "sans-serif", backgroundColor: "skyblue", WebkitTextStroke: "1px navy", stroke: "black", textAlign: "center", padding: "0", margin: "0" }}>AR</h1>
        <div id="blocks" style={{ width: "200px", background: "#eee", padding: "0px" }}></div>
      </div>


      {/* Main Editor */}
      <div id="gjs" style={{ flexGrow: 1 }}></div>
    </div>
  );
};

export default Editor;
