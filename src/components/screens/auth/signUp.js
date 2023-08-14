import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native'
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { emailRegex, passwordRegex } from '../../common/regex';
import { auth } from '../../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUp({ navigation }) {

    const { control, handleSubmit, formState: { errors }, clearErrors } = useForm({
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const handleSignUp = data => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                clearErrors(["email", "password"]);
                console.log("sign up")
                navigation.navigate("Sport");
                return user;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });

    };


    return (
        <View style={styles.signUpPage}>
            <Text style={styles.labels}>email</Text>
            <Controller
                control={control}
                name="email"
                // rules={{ required: 'wrong email address', pattern: emailRegex }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <TextInput
                            inputMode='email'
                            placeholder="Email"
                            value={value}
                            onChangeText={onChange}
                            style={styles.input}
                        />
                        {/* {error && (<Text style={styles.error}>{error.message}</Text>)} */}
                    </View>
                )}
            />
            <Text style={styles.labels}>password</Text>
            <Controller
                control={control}
                name="password"
                // rules={{ required: '1 uppercase 1 lowercase 1 number and minimum 8 characters', pattern: passwordRegex }}
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
                        {/* {error && (<Text style={styles.error}>{error.message}</Text>)} */}
                    </View>
                )}
            />
            {/* <Text style={styles.labels}>favorite sport</Text>
            <Controller
                control={control}
                name="favoriteSport"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <TextInput
                            inputMode='text'
                            placeholder="Favorite Sport"
                            value={value}
                            onChangeText={onChange}
                            style={styles.input}
                        />
                        {error && (<Text style={styles.error}>{error.message}</Text>)}
                    </View>
                )}
            /> */}
            {/* <Text style={styles.labels}>age</Text>
            <Controller
                control={control}
                name="age"
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <View>
                        <TextInput
                            inputMode='text'
                            placeholder="Age"
                            value={value}
                            onChangeText={onChange}
                            style={styles.input}
                        />
                        {error && (<Text style={styles.error}>{error.message}</Text>)}
                    </View>
                )}
            /> */}

            <Pressable onPress={handleSubmit(handleSignUp)}>
                <Text style={styles.signUpButton}>Sign Up</Text>
            </Pressable>

            <View>
                <Pressable onPress={() => navigation.navigate('Sign In')}>
                    <Text style={styles.signInLink}>already have an account? sign In now</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signUpPage: {
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
    signUpButton: {
        backgroundColor: '#2196F3',
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center',
        padding: 5,
        fontSize: 18,
        textTransform: 'capitalize',
        marginTop: 20
    },
    signInLink: {
        color: 'blue',
        fontSize: 18,
        textDecorationLine: 'underline',
        textTransform: 'capitalize',
        textAlign: 'center',
        marginTop: 15
    },
    error: {
        color: 'red',
        alignSelf: 'center',
        marginVertical: 5
    },
})