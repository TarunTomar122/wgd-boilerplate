import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Button extends LitElement {

    static get styles() {
        return css`
            button{
                display: inline-block;
                height: 38px;
                padding: 0 30px;
                color: var(--primary-color-800);
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
                border: 0.2rem solid var(--primary-color-800);
                font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
                cursor: pointer;
                box-sizing: border-box; 
            }
            button:hover,
            button:focus{
                color: var(--primary-color-600);
                border-color: var(--primary-color-600);
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

customElements.define('wgd-button', Button);