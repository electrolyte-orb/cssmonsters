hljs.initHighlightingOnLoad();
        
        document.getElementById('js1').innerHTML = `
        folder
            |
            |- index.html
            |
            |- style.css
            |
            |- style.scss
        `;

        document.getElementById('_html1').innerText = `
        <!-- Generally, we create a root classed div to wrap every visible element in our HTML file -->
        <div class="root">

            <!-- header that appears at the top of the page -->
            <div class="header">

                <!-- your logo goes here -->
                <h1>Demo Page</h1>
            
            </div>

            <div class="content">
                <!-- the main content of our page -->
                <h1>Dummy page</h1>
                <p>Dummy text</p>
            </div>

            <div class="footer">
                <!-- this will appear at the bottom-most of our page -->
                <p>some content for the footer</p>

            </div>

        </div>
        
        `;