export interface ListItemInterface {
    name: string,
    category: string,
    price: number
}

export interface TestModalInterface extends ListItemInterface{
    close: () => void
}

