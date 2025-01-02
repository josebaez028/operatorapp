import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import AuthHeader from '../../../components/AuthHeader'
import Input from '../../../components/Input'
import Checkbox from '../../../components/Checkbox'
import Button from '../../../components/Button'
import Separator from '../../../components/Separator'
import GoogleLogin from '../../../components/GoogleLogin'


const Signin = () => {
    const [checked, setChecked] = useState(false);

    const onSignUP = () => {
        console.log('Sign Up')
    }

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign In" />

            <Input label="Email" placeholder="johndoe@gmail.com" />
            <Input isPassword={true} label="Password" placeholder="*********" />

            <Button style={styles.button} title="Sign In" />

            <Separator text="Or sign in with" />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSignUP} style={styles.footerLink}> Sign Up </Text>
            </Text>
        </ScrollView>
    )
}

export default Signin;