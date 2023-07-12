<script></script>
<template>
  <h2 class="instruction">
    "Choose the perfect car for your reservation. Browse available options based
    on type, size, features, and price. Need help or have questions?
    <span>Contact our support team</span>. Happy car hunting!"
  </h2>
  <div class="sort-main">
    <div class="sort-menu">
      <div class="filter">
        <h1>Filter by</h1>
        <div class="search-box">
          <form action="">
            <input
              class="search-input"
              type="text"
              name=""
              placeholder="Type here ..."
              id=""
            />
            <input class="search-submit" type="submit" value="Search" />
          </form>
        </div>
      </div>
      <div class="poll">
        <h3 class="title">Car type</h3>
        <ul>
          <li class="option">
            <input type="radio" name="search" />
            <span>All</span>
          </li>
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
      <div class="poll">
        <h3 class="title">Transmission</h3>
        <ul>
          <li class="option">
            <input type="radio" name="type" />
            <span>Manual</span>
          </li>
          <li class="option">
            <input type="radio" name="type" />
            <span>Automatic</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="sort-body">
      <div class="list-container">
        <ul class="groups">
          <li>
            <div class="list-card">
              <div class="image-session">
                <span class="image"></span>
              </div>
              <div class="meta-session">
                <div class="head">
                  <a href="#" class="category">Truck</a>
                  <span class="flexone"></span>
                  <span class="per">
                    <input
                      type="range"
                      name=""
                      value="30"
                      min="0"
                      max="100"
                      id=""
                    />
                    <span>30% performance</span>
                  </span>
                </div>
                <div class="list-body">
                  <h2 class="title">
                    Car mark like Mercedes benz
                  </h2>
                  <ul>
                    <li>
                      <i class="fa fa-check-circle"></i>
                      <span class="car-behavior"> playload capacity:</span>
                      <span>4Tonnes</span>
                    </li>

                    <li>
                      <i class="fa fa-check-circle"></i>
                      <span class="car-behavior">Transmission Type:</span>
                      <span>Manual</span>
                    </li>

                    <li>
                      <i class="fa fa-check-circle"></i>
                      <span class="car-behavior">Seat:</span>
                      <span>4</span>
                    </li>

                    <li>
                      <i class="fa fa-check-circle"></i>
                      <span class="car-behavior">Price:</span>
                      <span>485$ / day</span>
                    </li>
                  </ul>
                </div>
                <div class="list-footer">
                  <a class="button" href="#"><i class="fa fa-info-circle"></i>Details</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
