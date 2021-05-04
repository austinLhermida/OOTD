class BottomLayer {
    constructor(aTemperature) {
        this.temperature = aTemperature;
        this.bottom = "";
        this.bottomLayerCloset = [
            "Thick Pants", 
            "Thick Pants + Long Johns",
            "Pants",
            "Shorts"
        ];
    }

    setBottomLayer() {
        if ( between(this.temperature, 40, 60) ) {
            this.bottom = this.bottomLayerCloset[1];
        }
        else if ( between(this.temperature, 60, 65) ) {
            this.bottom = this.bottomLayerCloset[0];
        }
        else if ( between(this.temperature, 65, 70) ) {
            this.bottom = this.bottomLayerCloset[2];
        }
        else if ( this.temperature >= 70) {
            this.bottom = this.bottomLayerCloset[3];
        }
    }

}