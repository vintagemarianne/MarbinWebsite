export class SearchParams {
    constructor(
        public TravellerCount: number = 1
    ) { }
    public PlaceName: string;
    public PlaceLocation: string;
    public StartDate: string;
    public EndDate: string;
}