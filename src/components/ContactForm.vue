<script>
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    return {
      email: "",
      name: "",
      lastname: "",
      phone: "",
      message: "",
      store,
      result: {
        show: false,
        success: true,
        message: "",
      },
      errors: {},
      loading: false,
    };
  },
  methods: {
    showSuccessMessage() {
      this.result.show = true;
      this.result.success = true;
      this.result.message =
        "Grazie per averci contattato. Ti risponderemo presto.";
    },
    showErrorMessage() {
      this.result.show = true;
      this.result.success = false;
      this.result.message = "Controlla dati inseriti";
    },
    clearForm() {
      this.email = "";
      this.name = "";
      this.lastname = "";
      this.phone = "";
      this.message = "";
    },
    sendForm() {
      this.loading = true;
      // Creo dati da inviare
      const data = {
        name: this.name,
        lastname: this.lastname,
        email: this.email,
        phone_number: this.phone,
        message: this.message,
      };

      // Mando la richiest axios post
      axios
        .post(`${this.store.baseUrl}/api/leads`, data)
        .then((resp) => {
          if (resp.data.success) {
            // mostrare messaggio di successo
            this.showSuccessMessage();
            // ripulire tutti i campi
            this.clearForm();
          } else {
            // mostrare il messaggio d'errore
            this.showErrorMessage();
            this.errors = resp.data.error;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<template>
  <div class="container mt-4">
    <h2>Send us your questions</h2>
    <div class="row">
      <div class="col-6 bg-secondary p-4">
        <!-- Messaggio di risultato -->
        <div
          class="alert"
          :class="[result.success ? 'alert-success' : 'alert-danger']"
          v-if="result.show">
          {{ result.message }}
        </div>

        <form @submit.prevent="sendForm">
          <div class="mb-3">
            <label for="email" class="form-label">Email </label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model.trim="email" />
            <div class="text-danger" v-if="errors && errors.email">
              <div v-for="error in errors.email">{{ error }}</div>
            </div>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Nome </label>
            <input type="text" class="form-control" id="name" v-model="name" />
          </div>
          <div class="mb-3">
            <label for="lastname" class="form-label">Cognome </label>
            <input
              type="text"
              class="form-control"
              id="lastname"
              v-model="lastname" />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Numero di telefono</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              v-model="phone" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Messaggio</label>
            <textarea
              class="form-control"
              id="message"
              rows="3"
              v-model="message"></textarea>
          </div>
          <button class="btn btn-light" :disabled="loading">
            {{ loading ? "Stiamo inviando il tuo messaggio ..." : "Invio" }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
