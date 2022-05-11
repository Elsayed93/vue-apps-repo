<template>
  <div class="container">
    <div class="upper-subcontainer">
      <img
        src="../assets/logo.png"
        alt="logo"
        srcset=""
        class="logo img-thumbnail"
      />
      <h1>Sigin Up</h1>
    </div>

    <!-- form -->
    <div class="form-container">
      <div class="mb-3 col-md-6">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-3 col-md-6">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 col-md-6 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style>
.upper-subcontainer {
  margin: 5rem  auto 0;
  /* margin-top: 5rem; */
  /* border: solid; */
  width: 50%;
  text-align: center;
}

.logo {
  width: 20%;
}

.form-container {
  position: relative;
  left: 325px;
  margin-top: 5rem;
}
</style>