class Stock {
    constructor() {
        this.boxes = [];
        this.serialNumber = 0;
    }

    add(w, v) {
        const box = {
            serial: this.serialNumber++,
            weight: w,
            volume: v,
            addedAt: Date.now()
        }
        this.boxes.push(box);
    }

    getByW(min_w) {
        let suitableBoxes = [];
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].weight >= min_w) {
                suitableBoxes.push(this.boxes[i]);
            }
        }

        if (suitableBoxes.length === 0) return -1;

        let minWeightBox = suitableBoxes[0];
        for (let i = 1; i < suitableBoxes.length; i++) {
            if (suitableBoxes[i].weight < minWeightBox.weight ||
                (suitableBoxes[i].weight === minWeightBox.weight && suitableBoxes[i].addedAt < minWeightBox.addedAt)) {
                minWeightBox = suitableBoxes[i];
            }
        }

        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].serial === minWeightBox.serial) {
                this.boxes.splice(i, 1);
                break;
            }
        }

        return minWeightBox.serial;
    }

    getByV(min_v) {
        let suitableBoxes = [];
        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].volume >= min_v) {
                suitableBoxes.push(this.boxes[i]);
            }
        }

        if (suitableBoxes.length === 0) return -1;

        let minVolumeBox = suitableBoxes[0];
        for (let i = 1; i < suitableBoxes.length; i++) {
            if (suitableBoxes[i].volume < minVolumeBox.volume ||
                (suitableBoxes[i].volume === minVolumeBox.volume && suitableBoxes[i].addedAt < minVolumeBox.addedAt)) {
                minVolumeBox = suitableBoxes[i];
            }
        }

        for (let i = 0; i < this.boxes.length; i++) {
            if (this.boxes[i].serial === minVolumeBox.serial) {
                this.boxes.splice(i, 1);
                break;
            }
        }

        return minVolumeBox.serial;
    }

}

const stock = new Stock();
stock.add(10, 5);
stock.add(15, 8);
stock.add(20, 7);
stock.add(20, 8);

console.log(stock.getByW(10));
console.log(stock.getByV(6));
console.log(stock.getByW(20));
console.log(stock.getByW(25));