<script>
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit() {
    // Here you can add code to handle the form submission
    // For example, you can send the form data to an API or an email service
  }
</script>

<style>
  .contact-form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    color: black;
  }

  .contact-form input, .contact-form textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid black;
  }

  .contact-form button {
    padding: 10px 20px;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
  }
</style>

<div class="contact-form">
  <h1>Contact Us</h1>
  <input bind:value={name} placeholder="Your Name" />
  <input bind:value={email} type="email" placeholder="Your Email" />
  <textarea bind:value={message} placeholder="Your Message"></textarea>
  <button on:click={handleSubmit}>Submit</button>
</div>