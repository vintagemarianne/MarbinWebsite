export class ProductAvailabilityInput {
    constructor(
        public product_id: string = null,
        public start_date: string = null,
        public end_date: string = null,
        public travellers_count: number = 0,
    ) {}
    
}