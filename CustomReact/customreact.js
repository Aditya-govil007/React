// function customRender(reactElement,container){
//     const dom_element=document
//     .createElement(reactElement.type)
//     dom_element.innerHTML= reactElement.Children
//     dom_element.setAttribute('href',reactElement.props.href)
//     dom_element.setAttribute('target',reactElement.props.target)

//     container.appendChild(dom_element)


// }  this code is very basic nd so we need improvements

function customRender(reactElement,container){
    const dom_element=document.createElement(reactElement.type)
    dom_element.innerHTML=reactElement.Children
    
    for(const prop in reactElement.props){
        if(prop ==='Children') continue;
        dom_element.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(dom_element)
}




const reactElement={
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    Children: 'click me to visit google' 
}


const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)