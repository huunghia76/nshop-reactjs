function Button({title, href, onClick}) {
    let Component = 'button';
    const props = {href,onClick} ;
    if (href) {
        Component = 'a'
        props.href = href;
    }
    if (onClick) {
        props.onClick = onClick;
    }
    
    return ( 
        <Component {...props}>{title}</Component>
     );
}

export default Button;