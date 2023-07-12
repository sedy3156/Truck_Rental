<script></script>

<template>
  <div class="dash-body">
    <div class="dash-sidebar">
      <div class="dash-logo"></div>
      <ul class="dash-menu">
        <li class="active">
          <a href="#">
            <i class="fa fa-tachometer"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-user"></i>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-briefcase"></i>
            <span>Careers</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-question-circle"></i>
            <span>FAQ</span>
          </a>
        </li>
        <li class="dash-logout">
          <a href="#">
            <i class="fa fa-sign-out"></i>
            <span>Logot</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="main--content">
      <div class="header--wrapper">
        <div class="header--title">
          <span>Primary</span>
          <h2>Dashboard</h2>
        </div>
        <div class="user--info">
          <div class="search--box">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search" name="" id="" />
          </div>
          <img src="../assets/image/fond.jpg" alt="" />
        </div>
      </div>
      <div class="card--container">
        <h3 class="main--title">Today's data</h3>
        <div class="card--wrapper">
          <div class="payment--card light-red">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payment amount</span>
                <span class="amount--value">$500</span>
              </div>
              <i class="fa fa-dollar icon dark-red"></i>
            </div>
            <span class="card--detail">786756fdfdfa5465</span>
          </div>

          <div class="payment--card light-purple">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payment order</span>
                <span class="amount--value">$500</span>
              </div>
              <i class="dark-purple fa fa-list icon"></i>
            </div>
            <span class="card--detail">786756fdfdfa5465</span>
          </div>

          <div class="payment--card light-green">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payment amount</span>
                <span class="amount--value">$500</span>
              </div>
              <i class="fa fa-users icon dark-green"></i>
            </div>
            <span class="card--detail">786756fdfdfa5465</span>
          </div>

          <div class="payment--card light-blue">
            <div class="card--header">
              <div class="amount">
                <span class="title">Payment amount</span>
                <span class="amount--value">$500</span>
              </div>
              <i class="fa fa-check icon dark-blue"></i>
            </div>
            <span class="card--detail">786756fdfdfa5465</span>
          </div>
        </div>
      </div>

      <div class="tabular--wrapper">
        <div class="table--search">
          <h3 class="main--title">Finance data</h3>
          <div class="search--box">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Search" name="" id="" />
          </div>
        </div>
        <div class="table--container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction Type</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
              <tr>
                <td>2023-02-22</td>
                <td>Expences</td>
                <td>Office supplies</td>
                <td>154$</td>
                <td>OFfice expenceas</td>
                <td>Pending</td>
                <td><button>Edit</button></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="7">Total: 12454$</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <font-awesome-icon icon="fa-solid fa-user-secret" />  -->
