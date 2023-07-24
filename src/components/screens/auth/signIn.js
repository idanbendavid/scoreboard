import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { emailRegex, passwordRegex } from '../../common/regex';

export default function SignIn({ navigation }) {

    const { control, handleSubmit, formState: { errors }, clearErrors } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleSignIn = data => {

        let user = {
            email: data.email,
            password: data.password
        }

        console.log(user)
        clearErrors(["email","password"])

    };

    return (
        <View style={styles.signInPage}>
            <Text style={styles.labels}>email</Text>
            <Controller
                control={control}
                name="email"
                rules={{ required: 'wrong email address', pattern: emailRegex }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <TextInput
                            inputMode='email'
                            placeholder="Email"
                            value={value}
                            onChangeText={onChange}
                            style={styles.input}
                        />
                        {error && (<Text style={styles.error}>{error.message}</Text>)}
                    </View>
                )}
            />
            <Text style={styles.labels}>password</Text>
            <Controller
                control={control}
                name="password"
                rules={{ required: '1 uppercase 1 lowercase 1 number and minimum 8 characters', pattern: passwordRegex }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <TextInput
                            inputMode='text'
                            placeholder="Password"
                            value={value}
                            onChangeText={onChange}
                            style={styles.input}
                            secureTextEntry
                        />
                        {error && (<Text style={styles.error}>{error.message}</Text>)}
                    </View>
                )}
            />

            <Pressable onPress={handleSubmit(handleSignIn)}>
                <Text style={styles.signInButton}>Sign In</Text>
            </Pressable>

            <View>
                <Pressable onPress={() => navigation.navigate(`Sign Up`)}>
                    <Text style={styles.signUpLink}>Don't have an account? sign up now</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signInPage: {
        marginTop: 20
    },
    input: {
        height: 40,
        marginHorizontal: 12,
        marginVertical: 6,
        borderWidth: 1,
        padding: 10,
    },
    labels: {
        paddingHorizontal: 12,
        paddingVertical: 5,
        fontSize: 16,
        textTransform: 'capitalize'
    },
    signInButton: {
        backgroundColor: '#2196F3',
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        padding: 5,
        fontSize: 18,
        textTransform: 'capitalize',
        marginTop: 20
    },
    signUpLink: {
        color: 'blue',
        textDecorationLine: 'underline',
        textTransform: 'capitalize',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 15
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        marginVertical: 5
    },
})