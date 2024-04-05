// define la inferfaz
export interface MenuItems {
    title: string; // titulo
    icon: string; // icono
    link: string; // link
    children?: MenuItems[]; // hijos son opcionales. por el icono ?
}
