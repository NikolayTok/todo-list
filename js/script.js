const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector
    this.height = height
    this.width = width
    this.bg = bg
    this.fontSize = fontSize
}

DomElement.prototype.createElement = function () {
    let dot = this.selector.slice(1)
    let div
    div = document.createElement('div')

    if (this.selector[0] === '.') {
        div.classList.add(dot)
    }

    else if (this.selector[0] === '#') {
        div.id = dot
    }

    div.style.cssText = `height:${this.height}px;width:${this.width}px;background:${this.bg};fontSize:${this.fontSize}px;`
    document.querySelector('body').append(div)

}


const one = new DomElement('.selector', 200, 200, 'blue', 12)
const two = new DomElement('#selector', 300, 400, 'yellow', 55)

two.createElement()

