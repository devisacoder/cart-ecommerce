import { MemoryRouter } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";
import { AllProducts } from "./ProductsAll";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const mockProducts = [
  {
    "name": "Combo gamer", 
    "id": 1,
    "description": "Combo mouse, audifonos, teclado y mousepad gamer rosa, combo mouse, audifonos, teclado y mousepad gamer rosa ",
    "images": ["https://media.gamecentar.rs/slike/blog/set-marvo-cm370-pink-baner-cena-prodaja.jpg"],
    "category": "Promotions",
    "discount ": 280000,
    "price": 100000
  },
  {
    "name": "Combo gamer", 
    "id": 2,
    "description": "Combo mouse, audifonos, teclado y mousepad gamer rosa, combo mouse, audifonos, teclado y mousepad gamer rosa ",
    "images": ["https://media.gamecentar.rs/slike/blog/set-marvo-cm370-pink-baner-cena-prodaja.jpg"],
    "category": "Promotions",
    "discount ": 280000,
    "price": 100000
  },
  {
    "name": "Combo gamer", 
    "id": 3,
    "description": "Combo mouse, audifonos, teclado y mousepad gamer rosa, combo mouse, audifonos, teclado y mousepad gamer rosa ",
    "images": ["https://media.gamecentar.rs/slike/blog/set-marvo-cm370-pink-baner-cena-prodaja.jpg"],
    "category": "Promotions",
    "discount ": 280000,
    "price": 100000
  },
  {
    "name": "Silla y escritorio gamer", 
    "id": 4,
    "description": "Silla y escritorio gamer minimalista, silla y escritorio gamer minimalista, silla y escritorio gamer minimalista",
    "images": ["https://m.media-amazon.com/images/I/716zBILDOoL._AC_UF894,1000_QL80_.jpg"],
    "category": "Promotions",
    "discount ": 2500000,
    "price": 2000000
  },
  {
    "name": "Teclado gamer negro ", 
    "id": 5,
    "description": "Teclado gamer negro con luces led rgb, teclado gamer negro con luces led rgb, Teclado gamer negro con luces led rgb ",
    "images": ["https://www.energysistem.com/cdnassets/blog/Que-teclado-ES-Gaming-comprar.webp"],
   "category": "Promotions",
   "discount ": 300000,
    "price": 200000
  },
  {
    "name": "Xbox x series", 
    "id": 6,
    "description": "Xbox x series, en negro y blanco con control, xbox x series, en negro y blanco con control, xbox x series, en negro y blanco con control, xbox x series, en negro y blanco con control, xbox x series, en negro y blanco con control",
    "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPkyTKBK008EKr60-nEIxdeMqDNKuKvBun_pAZerZFDGmbGcG"],
    "category": "Promotions",
    "discount ": 5000000,
    "price": 4000000
  },
  {
    "name": "Zapatos de charol", 
    "id": 7,
    "description": "Zapatos de charol negro, viene con medias blancas, zapatos de charol negro, viene con medias blancas, Zapatos de charol negro, viene con medias blancas",
    "images": ["https://theobjective.com/wp-content/uploads/2022/11/mocasines.jpg"],
    "category": "Promotions",
    "discount ": 550000,
    "price": 500000
  },
  {
    "name": "Zapatos Nike negro y rojo", 
    "id": 8,
    "description": "Zapatos nike negro y rojo, con estrella de cinco puntas, zapatos nike negro y rojo, con estrella de cinco puntas zapatos nike negro y rojo, con estrella de cinco puntas",
    "images": ["https://cdn.forbes.co/2021/03/Lil-Nas-X-Satan-.jpg"],
    "category": "Promotions",
    "discount ": 4800000,
    "price": 4000000
  },
  {
    "name": "Silla mecedora", 
    "id": 9,
    "description": "Silla mecedora para jardin, silla mecedora para jardin, silla mecedora para jardin, silla mecedora para jardin",
    "images": ["https://media.adeo.com/marketplace/MKP/91304628/345a367c88ac815657137f7d2551539e.jpeg?width=650&height=650&format=jpg&quality=80&fit=bounds"],
    "category": "Promotions",
    "discount ": 2000000,
    "price": 1000000
  },
  {
    "name": "Paleta rosa", 
    "id": 10,
    "description": "Paleta de sombras con 4 tonos, rosa brillante, rosa mate, iluminador y broncer, paleta de sombras con 4 tonos, rosa brillante, rosa r",
    "images": ["https://uperfect.pe/cdn/shop/products/imagen_2022-07-07_102803735.png?v=1657207751&width=533"],
    "category": "Maquillaje",
    "price": 12000
  },    
  {
    "name": "Paleta naranja", 
    "id": 11,
    "description": "Paleta de sombras con 4 tonos, naranja, cafe, iluminador y mostaza, paleta de sombras con 4 tonos, naranja, cafe, iluminador y mostaza  ",
    "images": ["https://uperfect.pe/cdn/shop/products/imagen_2022-07-07_102500853.png?v=1657207539&width=533"],
    "category": "Maquillaje",
    "price": 10000
  },
  {
    "name": "Paleta clara", 
    "id": 12,
    "description": "Paleta de sombras con 4 tonos verdosos, color claro, verde claro, cafe verdoso y verde mas oscuro, paleta de sombras con 4 tonos verdosos, color claro, verde claro, cafe verdoso y verde mas oscuro",
    "images": ["https://uperfect.pe/cdn/shop/products/imagen_2022-07-07_102500853.png?v=1657207539&width=533"],
    "category": "Maquillaje",
    "price": 8000
  },
  {
    "name": "Paleta rosa claro", 
    "id": 13,
    "description": "Paleta de sombras con 4 tonos, iluminador, cafe claro, coral y rosa claro, paleta de sombras con 4 tonos, iluminador, cafe claro, coral y rosa claro, paleta de sombras con 4 tonos, iluminador, cafe claro, coral y rosa claro",
    "images": ["https://uperfect.pe/cdn/shop/products/AtFirstCrush.jpg?v=1651587978&width=533"],
    "category": "Maquillaje",
    "price": 18000
  }, 
  {
    "name": "Base 24 horas", 
    "id": 14,
    "description": "Base de maquillaje, Studio Look 24 horas de duracion, base de maquillaje, Studio Look 24 horas de duracion, base de maquillaje, Studio Look 24 horas de duracion",
    "images": ["https://belcorpperu.vtexassets.com/arquivos/ids/304225-800-800?v=638509645120070000&width=800&height=800&aspect=true"],
    "category": "Maquillaje",
    "price": 20000
  },
  {
    "name": "Base SHEGLAM", 
    "id": 15,
    "description": "Base de maquillaje, SHEGLAM hidratante, base de maquillaje, SHEGLAM hidratante, base de maquillaje, SHEGLAM hidratante, base de maquillaje, SHEGLAM hidratante",
    "images": ["https://beautyglaminc.com/wp-content/uploads/2024/08/th-11134207-7r98q-lmq9nroi6ummf1.png"],
    "category": "Maquillaje",
    "price": 40000
  },
];

const mockFormatearPrecio = (price) => `$${price.toFixed(2)}`;

export default {
  title: "Components/AllProducts",
  component: AllProducts,
  decorators : [
    (Story) => (
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <ProductContext.Provider value={{filteredProducts: mockProducts, formatearPrecio: mockFormatearPrecio}}>
            <Story />
          </ProductContext.Provider>
        </QueryClientProvider>
      </MemoryRouter>
    )
  ]
};

const Template = (args) => <AllProducts {...args} />;

export const Default = Template.bind({});
Default.args = {};
