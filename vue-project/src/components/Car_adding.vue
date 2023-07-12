<script>
export default {
  data() {
    return {
      imageSrc: null,
      fileName: "",
    };
  },
  methods: {
    uploadImage() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageSrc = reader.result;
          this.fileName = file.name;
        };
        reader.readAsDataURL(file);
      } else {
        this.fileName = "";
        this.imageSrc = "";
      }
    },
  },
};
</script>
<template>
  <form>
    <div class="car_adding_body">
      <div class="car-adding-container">
        <div class="form-add-container">
          <div class="wrapper">
            <div class="file-image">
              <img v-if="imageSrc" :src="imageSrc" />
            </div>
            <div class="file_content">
              <div class="file_icon"><i class="fa fa-cloud-upload"></i></div>
              <div class="file_text">No file chosen, yet</div>
            </div>
            <div id="cancel-btn">
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div class="file-name" v-if="fileName">{{ fileName }}</div>
          </div>
          <input
            type="file"
            ref="fileInput"
            id="default-btn"
            @change="handleFileChange"
            hidden
          />
          <input
            @click="uploadImage"
            id="custom-btn"
            type="button"
            value="Choose a file"
          />
        </div>
        <div class="adding_poll">
          <h3 class="title">Car type</h3>
          <ul>
            <li class="option">
              <input type="radio" name="search" />
              <span>Pickup</span>
            </li>
            <li class="option">
              <input type="radio" name="search" />
              <span>Van</span>
            </li>
            <li class="option">
              <input type="radio" name="search" />
              <span>Truck</span>
            </li>
          </ul>
        </div>
        <input id="custom-btn" type="button" value="Save car" />
      </div>
      <div class="input-container">
        <div class="car-registration-container">
          <div class="car-details">
            <h2
              title="Please fill in all the required information before submitting the
            form."
            >
              Car Registration
            </h2>
            <p></p>
            <div class="form-group">
              <label for="make">Price per day:</label>
              <input
                type="number"
                id="make"
                name="make"
                placeholder="Enter the location price"
                required
              />
            </div>
            <div class="form-group">
              <label for="model">Model:</label>
              <input
                type="text"
                id="model"
                name="model"
                placeholder="Enter car model"
                required
              />
            </div>
            <div class="form-group">
              <label for="year">Year:</label>
              <input
                type="number"
                id="year"
                name="year"
                placeholder="Enter car year"
                required
              />
            </div>
            <div class="form-group">
              <label for="color">Color:</label>
              <input
                type="text"
                id="color"
                name="color"
                placeholder="Enter car color"
                required
              />
            </div>
            <div class="form-group">
              <label for="car-type">Transmission type:</label>
              <select name="car-type" id="car-type" required>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div class="form-group">
              <label for="loading-limit">Playload Limit:</label>
              <input
                type="number"
                id="loading-limit"
                name="loading-limit"
                placeholder="Enter loading limit"
                required
              />
            </div>
            <p>
              "Please note that if you have any additional information you would
              like to provide for truck rental or truck registration, kindly
              separate each detail with a <span>comma (,)</span> when filling
              out the relevant forms on our website."
            </p>
            <textarea name="" id="" cols="30" rows="3"></textarea>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="foot-car-adding">
      <h2>
        "Please note that if you have any additional information you would like
        to provide for truck rental or truck registration, kindly separate each
        detail with a <span>comma (,)</span> when filling out the relevant forms
        on our website."
      </h2>

      <div class="textarea-and-submit">
        <textarea name="more_information" id="" rows="1"></textarea>
        <button type="submit" class="save_car_info">Save</button>
      </div>
    </div> -->
  </form>
</template>
