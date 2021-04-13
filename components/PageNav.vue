<template>
      <nav class="navbar navbar-expand-xl">
         <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="~/assets/img/logo.jpg">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
               <ul class="main-menu navbar-nav mx-auto">
                  <li class="nav-item active">
                     <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                  </li>
                  <li class="nav-item dropitem">
                     <a class="nav-link" href="#">Diesel Generators<span class="arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></span></a>
                     <span class="arrow"><i class="fa fa-angle-down" aria-hidden="true"></i></span>
                     <div class="dropmenu">
                        <div class="container">
                           <div class="row">
                              <div class="widget widget_text col-md-3">
                                 <ul>
                                    <li><a href="#">Standby Diesel Generators</a></li>
                                    <li><a href="#">Silent Generators</a></li>
                                    <li><a href="#">Custom Built Generators</a></li>
                                    <li><a href="#">Diesel Generator Installation</a></li>
                                    <li><a href="#">Diesel Generator Hire</a></li>
                                    <li><a href="#">Generator Removals</a></li>
                                    <li><a href="#">Generator Load Testing</a></li>
                                 </ul>
                              </div>
                              <div class="col-md-4">
                                 <ul>
                                    <li><a href="#"><strong>Canopied Diesel Generators</strong></a></li>
                                    <li><a href="#">Canopied Generators – 30kVA to 200kVA</a></li>
                                    <li><a href="#">Canopied Generators – 200kVA to 450kVA</a></li>
                                    <li><a href="#">Canopied Generators – 450kVA to 800kVA</a></li>
                                    <li><a href="#">Canopied Generators – 800kVA to 1.5 mW</a></li>
                                 </ul>
                              </div>
                              <div class="col-md-5">
                                 <ul>
                                    <li><a href="#"><strong> Generators</strong></a></li>
                                    <li><a href="#">Containerised Generators – 100kVA to 300kVA</a></li>
                                    <li><a href="#">Containerised Generators – 300kVA to 600kVA</a></li>
                                    <li><a href="#">Containerised Generators – 600kVA to 1100kVA</a></li>
                                    <li><a href="#">Containerised Generators – 1100kVA to 2000kVA</a></li>
                                 </ul>
                              </div>
                           </div>
                           <div class="row">
                              <div class="col-md-8 offset-md-4 text-md-right">
                                 <a class="btn btn-contact py-2" href="#"><i class="fa fa-phone" aria-hidden="true"></i> Contact us</a>
                                 <a class="btn btn-contact py-2" href="#"><i class="fa fa-lightbulb-o" aria-hidden="true"></i> Knowledge Base</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Services</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">UPS Power Systems</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Rotary UPS</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Data Center Solutions</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Installation</a>
                  </li>
                  <li class="nav-item">
                    <NuxtLink class="nav-link" to="/knowledge-base">Knowledge Base</NuxtLink>
                  </li>
               </ul>
               <div class="navbar-text">
                    <a class="btn mr-2" href="login.html"><i class="fa fa-search" aria-hidden="true"></i></a>
                    <a class="btn btn-contact" href="register.html">
                       <Fa icon="phone"/> 0845 055 8455
                    </a>
               </div>
            </div>
         </div>
      </nav>
</template>

<script>
export default {

}

</script>