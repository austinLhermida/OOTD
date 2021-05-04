class SocksShoes {
    constructor(aTemperature) {
        this.temperature = aTemperature;
        this.socks = "";
        this.shoes = "";
        this.sockCloset = [
            "Wool Socks",
            "Long Socks",
            "No Show Socks"
        ];
        this.shoesCloset = [
            "Boots",
            "Sneakers",
            "Common Projects"
        ];
    }

    setSocksShoes() {
        if ( between(this.temperature, 40, 60) ) {
            this.socks = this.sockCloset[0];
            this.shoes = this.shoesCloset[0];
        }
        else if ( between(this.temperature, 60, 65) ) {
            this.socks = this.sockCloset[0];
            this.shoes = "Any Shoes";
        }
        else if ( between(this.temperature, 65, 75) ) {
            this.socks = this.sockCloset[1];
            this.shoes = "Any Shoes";
        }
        else if ( this.temperature >= 75) {
            this.socks = this.sockCloset[2];
            this.shoes = "Any Shoes";
        }
    }
}