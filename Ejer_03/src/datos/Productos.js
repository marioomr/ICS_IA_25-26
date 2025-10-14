export const productos = [
  {
    id: 1,
    nombre: 'Smartwatch Pro X',
    vendedor: {
      nombre: 'ElectroHub',
      rating: 4.8
    },
    imagenes: [
      'https://m.media-amazon.com/images/I/61ywb9wya9L._UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61sRKTAfrhL._UF1000,1000_QL80_.jpg',
    ],
    enStock: true,
    precio: {
      moneda: '€',
      valor: 215.50,
      enOferta: true
    },
    caracteristicas: ['GPS integrado', 'Monitor de ritmo cardíaco', 'Resistente al agua (5 ATM)']
  },
  {
    id: 2,
    nombre: 'Auriculares NoiseCancel',
    vendedor: {
      nombre: 'AudioWorld',
      rating: 4.2
    },
    imagenes: [
      'https://m.media-amazon.com/images/I/61sRKTAfrhL._UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/713HKx8akEL._UF1000,1000_QL80_.jpg',
    ],
    enStock: false,
    precio: {
      moneda: '€',
      valor: 99.99,
      enOferta: false
    },
    caracteristicas: ['Cancelación activa de ruido', 'Batería 20h', 'Micrófono integrado']
  },
  {
    id: 3,
    nombre: 'Tablet Ultra Slim',
    vendedor: {
      nombre: 'TechStore',
      rating: 4.7
    },
    imagenes: [
      'https://m.media-amazon.com/images/I/713HKx8akEL._UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61ywb9wya9L._UF1000,1000_QL80_.jpg',
    ],
    enStock: true,
    precio: {
      moneda: '€',
      valor: 349.99,
      enOferta: false
    },
    caracteristicas: ['Pantalla 10"', '64GB almacenamiento', 'Wi-Fi y 4G']
  }
];
