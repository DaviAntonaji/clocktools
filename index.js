const clockTools = {
    formater(time) {
        return [
            parseInt(time.split(':')[0]), 
            parseInt(time.split(':')[1])
        ]
    },
    list(firstTime, lastTime, sum) {
        let first = this.formater(firstTime)
        let last = this.formater(lastTime)
        let times = [];

        console.log(`${firstTime} até ${lastTime} - com intervalos de ${sum}`);
        while (!0) {
            times.push([...first]);
            first[1] += sum;
            if (first[1] >= 60) {
                first[0]++;
                first[1] = first[1] - 60;
            };
            if (first[0] == last[0] && first[1] >= last[1]) {
                times.push(last);
                break;
            };
        }
        return times;
    }
};
