import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Input extends LitElement {

    static get styles() {
        return css`
            input{
                height: 38px;
                padding: 0 8px;
                color: var(--gray-700);
                font-size: 12px;
                line-height: 38px;
                font-weight: 500;
                letter-spacing: .1rem;
                text-decoration: none;
                white-space: nowrap;
                background-color: transparent;
                border-radius: 6px;
                border: 1px solid var(--gray-700);
                box-sizing: border-box; 
            }
            input:hover,
            input:focus{
                border-color: var(--primary-color-600);
                outline: 0; 
            }
        `; 
    }

    static get properties() {
        return {
            placeholder: { type: String }
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <input
                type="text"
                placeholder=${this.placeholder}
            />
        `;
    }
}

customElements.define('gd-input', Input);