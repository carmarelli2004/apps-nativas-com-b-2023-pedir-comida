import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://adrianacotte.com/wp-content/uploads/2021/05/hamburguesa01.jpeg",
        productos: [
          {
          nombre:"Hamburguesa con queso",
          precio: 1000,
          descripcion: "",
          imagen: "https://media.viajando.travel/p/468c29ebaf5c49603bb09dddefb0e9f3/adjuntos/236/imagenes/000/527/0000527370/hamburguesa-klaussjpeg.jpeg?2022-10-06-21-39-04"
        },
        {
          nombre:"Hamburguesa especial",
          precio: 1500,
          descripcion: "",
          imagen: "https://elsheriffburger.com/uploads/lh90_elsheriffbuger/products/54/es/img-H.-Especial-5-WEB-de-taman%CC%83o-mediano.jpg"
        },
        {
          nombre:"Hamburguesa vegana",
          precio: 1300,
          descripcion: "",
          imagen: "https://images.ctfassets.net/n7hs0hadu6ro/6Rq1d80LsiYWzaA8DjXhGQ/671dafb9976b416ca782c6971e7c0568/Hamburguesa-vegana.jpg?w=1254&h=836&fl=progressive&q=50&fm=jpg"
        },
        {
          nombre:"Hamburguesa celíaca",
          precio: 1250,
          descripcion: "",
          imagen: "https://ilsole.com.ar/wp-content/uploads/2016/07/figacitas-sin-tacc-sin-gluten-il-sole.jpg"
        },
        {
          nombre:"Hamburguesa americana",
          precio: 3500,
          descripcion: "",
          imagen: "https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg"
        },
        {
          nombre:"Medallón platero",
          precio: 2000,
          descripcion: "",
          imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP3-OG6DyMU6ZzzwZ6N85KocYXtHs5JZKK3k86aS6Jetu-7hCT_MSvBiQSl9VwFfcKBmg&usqp=CAU"
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://ar.cienradios.com/resizer/q1SI5tP94IkDVYIgZqzYtC3zZZI=/arc-photo-radiomitre/arc2-prod/public/WV3OJNLFRJD65IIWSSUHRC2NHA.jpg",
        productos: [
          {
            nombre: 'Pizza común',
            precio: 1000,
            descripcion: "Pizza de muzzarella",
            imagen:'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-tomate-albahaca-y-mozzarella-1080x671.jpg',
          },
          {
            nombre: 'Pizza especial',
            precio: 1200,
            descripcion: "Pizza con cheddar, papas fritas y bacon",
            imagen:
              'https://images.deliveryhero.io/image/pedidosya/products/349290-2bc704f1-5373-438d-b854-13a089b02f36.jpg?quality=90&width=1920&webp=1&dpi=1.5',
          },
          {
            nombre: 'Pizza napolitana',
            precio: 1300,
            descripcion: "Pizza que combina queso, tomate y albahaca.",
            imagen:
              'https://recetinas.com/wp-content/uploads/2019/03/pizza-napolitana-receta.jpg',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://www.hogarmania.com/archivos/201903/postres-chocolate-848x477x80xX.jpg",
        productos: [
          {
            nombre: 'Tiramisú',
            precio: 800,
            descripcion: "Clasico tiramisú al estilo italiano.",
            imagen: 'https://i.blogs.es/410470/vasitos/1366_2000.jpeg',
          },
          {
            nombre: 'Chocotorta',
            precio: 800,
            descripcion: "Porción de chocotorta.",
            imagen:
              'https://www.cronica.com.ar/__export/1653520801548/sites/cronica/img/2021/06/17/chocotorta_2_crop1623944104124.jpg_792575817.jpg',
          },
          {
            nombre: 'Brownie',
            precio: 800,
            descripcion: "Brownie de chocolate",
            imagen:
              'https://www.hogarmania.com/archivos/201903/postres-chocolate-848x477x80xX.jpg',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://www.telemundo.com/sites/nbcutelemundo/files/images/article/cover/2017/04/24/vaso-de-gaseosa.jpg",
        productos: [{
          nombre: 'Agua',
          precio: 100,
          descripcion: "Agua mineral 500cc",
          imagen:
            'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg',
        },
        {
          nombre: 'Agua Saborizada Naranja',
          precio: 100,
          descripcion: "Agua saborizada marca X 500cc sabor naranja",
          imagen:
            'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040783_f.jpg',
        },
        {
          nombre: 'Coca-Cola Zero',
          precio: 100,
          descripcion: "Coca-cola Zero azucares 500cc",
          imagen:
            'https://a-manger.com/cdn/shop/products/coca-cola-sin-azucares-500cc-almacen-gaseosas-casa-segal-mendoza-600x600-1.jpg?v=1632746448',
        },]
    }
]
