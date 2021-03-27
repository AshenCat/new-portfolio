

export default function CardSizing (props) {
    const size  = props;
    // console.log(props)
    const cardHeight = [{
        minHeight: 
        size.x < 300 ? '580px' : 
        size.x < 360 ? '550px' : 
        size.x < 421 ? '480px' : 
        size.x < 480 ? '530px' :
        size.x < 545 ? '630px' : 
        size.x < 600 ? '570px' : 
        size.x < 700 ? '520px' : 
        size.x < 800 ? '480px' : '440px'
    },{
        minHeight: 
        size.x < 321 ? '540px' :
        size.x < 360 ? '510px' :  
        size.x < 421 ? '460px' : 
        size.x < 480 ? '510px' :
        size.x < 545 ? '610px' : 
        size.x < 600 ? '550px' : 
        size.x < 700 ? '500px' : 
        size.x < 800 ? '460px' : '430px'
    },{
        minHeight: 
        size.x < 321 ? '500px' :
        size.x < 360 ? '480px' :  
        size.x < 421 ? '450px' : 
        size.x < 480 ? '510px' :
        size.x < 545 ? '570px' : 
        size.x < 600 ? '550px' : 
        size.x < 700 ? '470px' : 
        size.x < 800 ? '420px' : '390px'
    },{
        minHeight: 
        size.x < 321 ? '510px' :
        size.x < 360 ? '480px' :  
        size.x < 421 ? '455px' : 
        size.x < 480 ? '535px' :
        size.x < 545 ? '570px' : 
        size.x < 600 ? '510px' : 
        size.x < 700 ? '470px' : 
        size.x < 800 ? '420px' : '390px'
    }
];


    

    const imageStyle = {
        width: size.x < 480 ? "150px" :"300px", 
        float: 'left', 
        marginRight: '10px', 
        borderRadius: '5px'};

    return {
        cardHeight,
        imageStyle,
    }
}