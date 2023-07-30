import { View, Text, Button } from 'react-native';
import { auth } from "../firebase";
import AppStyles from '../styles/AppStyles';
import InlineTextButton from '../components/InlineTextButton';
import { signOut, sendEmailVerification } from 'firebase/auth';

export default function ToDo({ navigation, route }) {
    let logout = () => {
        signOut(auth).then(() => {
            navigation.popToTop();
        });
    }

    let showContent = () => {

    };

    let showSendVerificationEmail = () => {
        return (
            <View>
                <Text>Please verify your email to use ToDo</Text>
                <Button title="Send Verification Email" onPress={() => sendEmailVerification(auth.currentUser)}></Button>

            </View>
        )
    }


    return (
        <View style={AppStyles.container}>
            <View style={AppStyles.rowContainer}></View>
            <InlineTextButton text="Manage Account" color="light"></InlineTextButton>
            <Text style={AppStyles.header}>ToDo</Text>
            {auth.currentUser.emailVerified ? showContent() : showSendVerificationEmail()}

        </View>
    )
}