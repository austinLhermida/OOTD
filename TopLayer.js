class TopLayer {
    constructor(aTemperature) {
        this.temperature = aTemperature;
        this.outerLayer = "";
        this.middleLayer = "";
        this.innerLayer = "";
        this.outLayerCloset = [
            "Overcoat",
            "Heavy Jacket",
            "Hoodie",
            "Overshirt",
            "Sweater"
        ];
        this.middleLayerCloset = [
            "N/A",
            "Hoodie",
            "Thick Turtle Neck",
            "Thin Turtle Neck",
            "Sweater"
        ];
        this.innerLayerCloset = [
            "Thermal + Turtle Neck",
            "Thermal",
            "Shirt"
        ];
    }

    setTopLayer() {
        if ( this.temperature < 50 ) {
            this.outerLayer = this.outLayerCloset[0];
            this.middleLayer = this.middleLayerCloset[1];
            this.innerLayer = this.innerLayerCloset[0]; 
        }
        else if ( between(this.temperature, 50, 60) ) {
            // generate random number between 0 and 1
            const randomNum = Math.floor(Math.random() * 2); 
            switch (randomNum) {
                case 0: // outfit possibility 1
                    this.outerLayer = this.outLayerCloset[1]; 
                    this.middleLayer = this.middleLayerCloset[2]; 
                    this.innerLayer = this.innerLayerCloset[1]; 
                    break;
                case 1: // outfit possibility 2
                    this.outerLayer = this.outLayerCloset[2]; 
                    this.middleLayer = this.middleLayerCloset[3]; 
                    this.innerLayer = this.innerLayerCloset[1];
                    break; 
            }
        }
        else if ( between(this.temperature, 60, 65) ) {
            // generate random number between 0 and 2 
            const randomNum = Math.floor(Math.random() * 3); 
            switch (randomNum) {
                case 0: // outfit possibility 1
                    this.outerLayer = this.outLayerCloset[3];
                    this.middleLayer = this.middleLayerCloset[4]; 
                    this.innerLayer = this.innerLayerCloset[1];
                    break;
                case 1: // outfit possibility 2
                    this.outerLayer = this.outLayerCloset[2];
                    this.middleLayer = "No middle layer";
                    this.innerLayer = this.innerLayerCloset[1];
                    break; 
                case 2: // outfit possibility 3
                    this.outerLayer = this.outLayerCloset[4]; 
                    this.middleLayer = "No middle layer";
                    this.innerLayer = this.innerLayerCloset[1];
                    break; 
            }
        }
        else if ( between(this.temperature, 65, 70) ) {
            // generate random number between 0 and 1 
            const randomNum = Math.floor(Math.random() * 2); 
            switch (randomNum) {
                case 0: // outfit possibility 1
                    this.outerLayer = this.outLayerCloset[3];
                    this.middleLayer = "No middle layer";
                    this.innerLayer = this.innerLayerCloset[2];
                    break;
                case 1: // outfit possibility 2
                    this.outerLayer = this.outLayerCloset[4];
                    this.middleLayer = "No middle layer";
                    this.innerLayer = this.innerLayerCloset[2];
                    break;  
            }
        }
        else if ( between(this.temperature, 70, 75) ) {
            // generate random number between 0 and 1 
            const randomNum = Math.floor(Math.random() * 2); 
            switch (randomNum) {
                case 0: // outfit possibility 1
                    this.outerLayer = this.outLayerCloset[3];
                    this.middleLayer = "No middle layer";
                    this.innerLayer = this.innerLayerCloset[2];
                    break;
                case 1: // outfit possibility 2
                    this.outerLayer = this.outLayerCloset[4];
                    this.middleLayer = "No middle layer";
                    this.innerLayer = this.innerLayerCloset[2];
                    break;  
            }
        }
        else if ( between(this.temperature, 75, 80) ) {
            this.outerLayer = "No outer layer";
            this.middleLayer = "No middle layer";
            this.innerLayer = this.innerLayerCloset[2];
        }
        else if ( this.temperature >= 80) {
            this.outerLayer = "No outer layer";
            this.middleLayer = "No middle layer";
            this.innerLayer = this.innerLayerCloset[2];
        }
    }
    

}