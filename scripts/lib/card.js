class Card {
    parent;
    title;
    image;
    price;
    id;

    constructor(parent, title, image, price, id) {
        this.parent = parent;
        this.title = title;
        this.image = image;
        this.price = price;
        this.id = id;

        this.#render();
    }

    #render() {
        // Create root card element
        const article = document.createElement("article");
        article.className = "card h-400 w-400";
        article.setAttribute("role", "article");
        article.setAttribute("aria-label", this.title);

        // --- Card Image Container ---
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "img_container flex_h flex_align-center flex_justify-center w-full ratio-4-3 spacing_pad-v_s";

        const img = document.createElement("img");
        img.src = "https://brewly-api.vercel.app/public" + this.image;
        console.log("https://brewly-api.vercel.app/public" + this.image)
        img.alt = this.title;
        img.loading = "lazy";
        img.className = "img";

        imageWrapper.appendChild(img);

        // --- Card Content ---
        const content = document.createElement("div");
        content.className = "card_content";

        const titleEl = document.createElement("h3");
        titleEl.className = "card_title text_size-m";
        titleEl.textContent = this.title;

        const priceEl = document.createElement("p");
        priceEl.className = "card_body text_size-s text-accent";
        priceEl.textContent = `$${this.price}`;

        // --- Card Actions ---
        const actions = document.createElement("div");
        actions.className = "card_actions";

        const link = document.createElement("a");
        link.className = "btn btn--s btn--accent";
        link.href = `/pages/product/${this.id}`;
        link.textContent = "View";

        actions.appendChild(link);

        // Combine content
        content.appendChild(titleEl);
        content.appendChild(priceEl);
        content.appendChild(actions);

        // Build card
        article.appendChild(imageWrapper);
        article.appendChild(content);

        // Append to parent
        this.parent.appendChild(article);
    }
}

export default Card;
