import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/Input'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import Separator from '../../../components/Separator'
import GoogleLogin from '../../../components/GoogleLogin'


const Signup = () => {
    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        console.log('Sign In')
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up" />

            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" placeholder="johndoe@gmail.com" />
            <Input isPassword={true} label="Password" placeholder="*********" />

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>

            <Button style={styles.button} title="Sign Up" />

            <Separator text="Or sign in with" />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Already have an account?
                <Text onPress={onSignIn} style={styles.footerLink}> Sign In </Text>
            </Text>
        </ScrollView>
    )
}

export default Signup;