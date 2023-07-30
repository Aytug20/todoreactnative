import { StyleSheet } from "react-native";

export default StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        


    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:16,

    },
    rowContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginVertical: 8,
    },

    topMargin: {
        marginTop: 16,
    },

    errorText: {
        color:"#00BFB2"

    },

    bottomMargin: {
        marginBottom: 16,
    },

    backgroundCover: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.8,
        padding: 16
    },

    lightText: {
        color: "#fff"
    },

    header: {
        fontSize: 20,

    },
    textInput: {
        alignSelf: 'stretch',
        padding: 8,
        borderBottomWidth: 2,
        marginVertical: 8,
    },
    head: {
        fontSize: 12,

    },
    lightTextInput:{
        borderBottomColor:"#ffffff"

    },
    inlineTextButton:{
        color:"#00BFB2"
    },
    pressedInlineTextButton:{
        color:"#00BFB2",
        opacity:0.6

    },
    


});