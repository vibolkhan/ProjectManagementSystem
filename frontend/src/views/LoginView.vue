<template>
  <v-container style="height: 80%;" class="d-flex justify-center align-center">
    <v-col cols="4">
      <v-card class="pa-5">

        <v-card-text>
          <h4 class="text-h4 text-primary">Login</h4>
        </v-card-text>
        <v-divider class="my-2"></v-divider>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="d-flex flex-column"
        >

          <v-text-field
            v-model="email"
            :rules="rules.emailRules"
            label="E-mail"
            required
          ></v-text-field>
      
          <v-text-field
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            hint="At least 8 characters"
            class="input-group--focused"
            v-model="password"
            @click:append="showPassword = !showPassword"
          ></v-text-field>

          <small class="error--text" v-if="error">Invalid email or password!</small>

          <v-spacer vertical class="mt-4"/>
      
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="checkLogin"
          >
            login
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
  export default {
    data: () => ({
      valid: true,
      password: '',
      email: '',
      rules: {
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        required: value => !!value || 'Required.',
        min: v => v.length >= 4 || 'Min 4 characters',
      },
      showPassword: false,
      error: false
    }),

    methods: {
      ...mapActions(["login"]),
      checkLogin() {
        this.login({email: this.email, password: this.password})
        setTimeout(() => {
          this.error = true
        }, 500);
      },
    },
    
    created() {
      if (sessionStorage.getItem('token')) {
        if (this.$route.meta.login) {
          this.$router.push('/dashboard')
        } else {
          this.$router.push('/')
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('userId')
        }
      } else {
        this.$router.push('/')
      }
    }
  }
</script>