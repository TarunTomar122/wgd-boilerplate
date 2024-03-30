import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Button extends LitElement {

    static get styles() {
        return css`
            button{
                display: inline-block;
                height: 38px;
                padding: 0 30px;
                color: var(--primary-color-700);
                text-align: center;
                font-size: 11px;
                font-weight: 600;
                line-height: 38px;
                letter-spacing: .1rem;
                text-transform: uppercase;
                text-decoration: none;
                white-space: nowrap;
                background-color: transparent;
                border-radius: 12px;
                border: 1px solid var(--primary-color-700);
                cursor: pointer;
                box-sizing: border-box; 
            }
            button:hover,
            button:focus{
                color: var(--primary-color-500);
                border-color: var(--primary-color-500);
                outline: 0; 
            }
        `; 
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <button>
                <slot></slot>
            </button>
        `;
    }
}

customElements.define('gd-button', Button);