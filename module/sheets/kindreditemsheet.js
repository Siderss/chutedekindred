export default class KindredItemSheet extends ItemSheet{
    get template(){
        console.log(`Kindred` | ${this.item.data.type}-sheet

        return systems/chutedekindred-foundry/templates/sheets/${this.item.data.type}-sheet.html;
    }

    getData(){
        const data = super.getData();
        
        console.log(data);

        return data;
    }
}