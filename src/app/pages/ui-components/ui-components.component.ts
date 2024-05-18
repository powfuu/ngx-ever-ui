import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-components',
  templateUrl: './ui-components.component.html',
  styleUrls: ['./ui-components.component.scss'],
})
export class UiComponentsComponent {
  components: string[] = [
    'e-button',
    'e-dropdown',
    'e-flex',
    'e-card',
    'e-modal',
    'e-item',
    'e-badge',
    'e-content',
    'e-search',
    'e-input',
    'e-dialog',
    'e-item-navigator',
    'e-sidesheet',
    'e-tooltip',
    'e-toast',
    'e-loading',
  ];
  formatoTexto(texto: string): string {
    if (texto === 'e-flex') {
      return 'Flex Content';
    } else if (texto === 'e-item-navigator') {
      return 'Item Nav';
    }

    let textoSinPrefijo = texto.replace(/^e-/, '');
    let textoFormateado =
      textoSinPrefijo.charAt(0).toUpperCase() + textoSinPrefijo.slice(1);

    return textoFormateado;
  }
}
