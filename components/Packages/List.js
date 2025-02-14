import React from 'react'

const Packageslist = () => {
    return (
        <>
            <div class="placetop">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="left-box">
                                <h6>BOOK NOW</h6>
                                <div class="book">
                                    <ul class="nav nav-tabs list-inline" role="tablist">
                                        <li class="active has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <a class="nav-link active" id="tour-tab" data-bs-toggle="tab" data-bs-target="#tour" role="tab" aria-selected="true">tour</a>
                                        </li>
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <a class="nav-link" id="hotel-tab" data-bs-toggle="tab" data-bs-target="#hotel" role="tab" aria-selected="false" tabindex="-1">hotel</a>
                                        </li>
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <a class="nav-link" id="flight-tab" data-bs-toggle="tab" data-bs-target="#flight" role="tab" aria-selected="false" tabindex="-1">flights</a>
                                        </li>
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <a class="nav-link" id="package-tab" data-bs-toggle="tab" data-bs-target="#package" role="tab" aria-selected="false" tabindex="-1">Packages</a>
                                        </li>
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <a class="nav-link" id="place-tab" data-bs-toggle="tab" data-bs-target="#place" role="tab" aria-selected="false" tabindex="-1">places</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="tour" role="tabpanel" aria-labelledby="#tour-tab">
                                            <form class="form-horizontal" method="post">
                                                <div class="form-group">
                                                    <h2>Where</h2>
                                                    <label>Destination</label>
                                                    <input name="s" class="form-control" value="" placeholder="Enter a destination or tour type.." type="text" />
                                                </div>
                                                <div class="form-group">
                                                    <h2>When</h2>
                                                    <div class="date">
                                                        <label>From</label>
                                                        <div class="input-group date" id="datepicker">
                                                            <input name="s" class="form-control" value="" placeholder="dd/mm/yy" type="text" />
                                                            <span class="input-group-append">
                                                                <button type="button" class="calender">
                                                                    <i class="fa-regular fa-calendar"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="date form-group">
                                                    <label>To</label>
                                                    <div class="input-group date" id="datepicker1">
                                                        <input name="s" class="form-control" value="" placeholder="dd/mm/yy" type="text" />
                                                        <span class="input-group-append">
                                                            <button type="button" class="calender">
                                                                <i class="fa-regular fa-calendar"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="form-group position-relative">
                                                    <label>Trip Type</label>
                                                    <div class="selec-icon">
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                        <option value="1">Trip Type</option>
                                                        <option value="0">Location 1</option>
                                                        <option value="0">Location 2</option>
                                                        <option value="0">Location 3</option>
                                                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" title="Trip Type"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Trip Type</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                </div>
                                                <div class="form-group">
                                                    <label>Max Budget</label>
                                                    <input name="s" class="form-control" value="" placeholder="Max budget ($)" type="text" />
                                                </div>
                                                <div class="text-center">
                                                    <button class="btn-primary" type="button">Proceed</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="#hotel-tab">
                                            <form class="form-horizontal" method="post">
                                                <div class="form-group">
                                                    <h2>Where</h2>
                                                    <label>Destination</label>
                                                    <input name="s" class="form-control" value="" placeholder="Enter a destination or tour type.." type="text" />
                                                </div>
                                                <div class="form-group">
                                                    <h2>When</h2>
                                                    <div class="date">
                                                        <label>check in</label>
                                                        <div class="input-group date" id="datepicker2">
                                                            <input name="s" class="form-control" value="" placeholder="dd/mm/yy" type="text" />
                                                            <span class="input-group-append">
                                                                <button type="button" class="calender">
                                                                    <i class="fa-regular fa-calendar"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="date form-group">
                                                    <label>check out</label>
                                                    <div class="input-group date" id="datepicker3">
                                                        <input name="s" class="form-control" value="" placeholder="dd/mm/yy" type="text" />
                                                        <span class="input-group-append">
                                                            <button type="button" class="calender">
                                                                <i class="fa-regular fa-calendar"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>Rooms</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">01</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" title="01"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">01</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-2" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>adults</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">01</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="01"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">01</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-3" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>kids</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">01</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-4" aria-haspopup="listbox" aria-expanded="false" title="01"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">01</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-4" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button class="btn-primary" type="button">Proceed</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="flight" role="tabpanel" aria-labelledby="#flight-tab">
                                            <form class="form-horizontal" method="post">
                                                <div class="form-group">
                                                    <h2>Where</h2>
                                                    <label>Leaving from</label>
                                                    <input name="s" class="form-control" value="" placeholder="City,district,specific airport.." type="text" />
                                                </div>
                                                <div class="form-group">
                                                    <label>Going to</label>
                                                    <input name="s" class="form-control" value="" placeholder="City,district,specific airport.." type="text" />
                                                </div>
                                                <div class="form-group">
                                                    <h2>When</h2>
                                                    <div class="date">
                                                        <label>Departing 0n</label>
                                                        <div class="input-group date" id="datepicker4">
                                                            <input name="s" class="form-control" value="" placeholder="dd/mm/yy" type="text" />
                                                            <span class="input-group-append">
                                                                <button type="button" class="calender">
                                                                    <i class="fa-regular fa-calendar"></i>
                                                                </button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="date form-group">
                                                    <label>Arriving on</label>
                                                    <div class="input-group date" id="datepicker5">
                                                        <input name="s" class="form-control" value="" placeholder="dd/mm/yy" type="text" />
                                                        <span class="input-group-append">
                                                            <button type="button" class="calender">
                                                                <i class="fa-regular fa-calendar"></i>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>adults</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">01</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-5" aria-haspopup="listbox" aria-expanded="false" title="01"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">01</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-5" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>Infact</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">01</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-6" aria-haspopup="listbox" aria-expanded="false" title="01"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">01</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-6" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>kids</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">01</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-7" aria-haspopup="listbox" aria-expanded="false" title="01"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">01</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-7" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group">
                                                            <label>Promo code</label>
                                                            <input type="text" name="code" class="form-control" placeholder="type here" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button class="btn-primary" type="button">Proceed</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="package" role="tabpanel" aria-labelledby="#package-tab">
                                            <form class="form-horizontal" method="post">
                                                <div class="form-group">
                                                    <label>Destination</label>
                                                    <input name="s" class="form-control" value="" placeholder="Enter a destination or tour type.." type="text" />
                                                </div>
                                                <div class="form-group position-relative">
                                                    <label>City</label>
                                                    <div class="selec-icon">
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                        <option value="1">Choose city</option>
                                                        <option value="0">02</option>
                                                        <option value="0">03</option>
                                                        <option value="0">04</option>
                                                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-8" aria-haspopup="listbox" aria-expanded="false" title="Choose city"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Choose city</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-8" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                </div>
                                                <div class="form-group position-relative">
                                                    <label>Category</label>
                                                    <div class="selec-icon">
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                        <option value="1">Choose category</option>
                                                        <option value="0">02</option>
                                                        <option value="0">03</option>
                                                        <option value="0">04</option>
                                                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-9" aria-haspopup="listbox" aria-expanded="false" title="Choose category"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Choose category</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-9" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                </div>
                                                <div class="form-group position-relative">
                                                    <label>No.of persons</label>
                                                    <div class="selec-icon">
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                        <option value="1">Choose no.of persons</option>
                                                        <option value="0">02</option>
                                                        <option value="0">03</option>
                                                        <option value="0">04</option>
                                                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-10" aria-haspopup="listbox" aria-expanded="false" title="Choose no.of persons"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Choose no.of persons</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-10" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>min price</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">Min Price</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-11" aria-haspopup="listbox" aria-expanded="false" title="Min Price"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Min Price</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-11" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="form-group position-relative">
                                                            <label>Max Price</label>
                                                            <div class="selec-icon">
                                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                            </div>
                                                            <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                                <option value="1">Max Price</option>
                                                                <option value="0">02</option>
                                                                <option value="0">03</option>
                                                                <option value="0">04</option>
                                                            </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-12" aria-haspopup="listbox" aria-expanded="false" title="Max Price"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Max Price</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-12" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button class="btn-primary" type="button">Proceed</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="place" role="tabpanel" aria-labelledby="#place-tab">
                                            <form class="form-horizontal" method="post">
                                                <div class="form-group">
                                                    <label>country</label>
                                                    <input name="s" class="form-control" value="" placeholder="Type country here" type="text" />
                                                </div>
                                                <div class="form-group position-relative">
                                                    <label>City</label>
                                                    <div class="selec-icon">
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                        <option value="1">Choose city</option>
                                                        <option value="0">Delhi</option>
                                                        <option value="0">Ludhaiana</option>
                                                        <option value="0">Jalandhar</option>
                                                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-13" aria-haspopup="listbox" aria-expanded="false" title="Choose city"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Choose city</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-13" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                </div>
                                                <div class="form-group position-relative">
                                                    <label>Category	</label>
                                                    <div class="selec-icon">
                                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                    </div>
                                                    <div class="dropdown bootstrap-select form-control"><select class="selectpicker form-control" name="location">
                                                        <option value="1">Choose category</option>
                                                        <option value="0">Delhi</option>
                                                        <option value="0">Ludhaiana</option>
                                                        <option value="0">Jalandhar</option>
                                                    </select><button type="button" tabindex="-1" class="btn dropdown-toggle btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-14" aria-haspopup="listbox" aria-expanded="false" title="Choose category"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Choose category</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-14" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                                </div>
                                                <div class="text-center">
                                                    <button class="btn-primary" type="button">Proceed</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="left-box">
                                <h6>CATEGORIES</h6>
                                <div class="who">
                                    <div class="accordion" id="collapse">
                                        <div class="accordion-item active">
                                            <div class="accordion-header active">
                                                <a data-bs-toggle="collapse" href="#collapse1" aria-expanded="false">
                                                    <h4 class="panel-title">
                                                        Tours <i class="fa fa-caret-down" aria-hidden="true"></i>
                                                    </h4>
                                                </a>
                                            </div>
                                            <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#collapse">
                                                <div class="accordion-body">
                                                    <p>Seas Tours (980)</p>
                                                    <p>Romantic Tours (130)</p>
                                                    <p>Honeymoon Tours (123)</p>
                                                    <p>Mountains Tours (160)</p>
                                                    <p>Advantages Tours (60)</p>
                                                    <p>Sports Tours (120)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <a data-bs-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                                    <h4 class="panel-title">
                                                        Hotels <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                    </h4>
                                                </a>
                                            </div>
                                            <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#collapse">
                                                <div class="accordion-body">
                                                    <p>Seas Tours (980)</p>
                                                    <p>Romantic Tours (130)</p>
                                                    <p>Honeymoon Tours (123)</p>
                                                    <p>Mountains Tours (160)</p>
                                                    <p>Advantages Tours (60)</p>
                                                    <p>Sports Tours (120)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <a data-bs-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                                    <h4 class="panel-title">
                                                        Packages <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                    </h4>
                                                </a>
                                            </div>
                                            <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#collapse">
                                                <div class="accordion-body">
                                                    <p>Seas Tours (980)</p>
                                                    <p>Romantic Tours (130)</p>
                                                    <p>Honeymoon Tours (123)</p>
                                                    <p>Mountains Tours (160)</p>
                                                    <p>Advantages Tours (60)</p>
                                                    <p>Sports Tours (120)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <div class="accordion-header">
                                                <a data-bs-toggle="collapse" href="#collapse4" aria-expanded="false">
                                                    <h4 class="panel-title">
                                                        Flights <i class="fa fa-caret-right" aria-hidden="true"></i>
                                                    </h4>
                                                </a>
                                            </div>
                                            <div id="collapse4" class="accordion-collapse collapse show" data-bs-parent="#collapse">
                                                <div class="accordion-body">
                                                    <p>Seas Tours (980)</p>
                                                    <p>Romantic Tours (130)</p>
                                                    <p>Honeymoon Tours (123)</p>
                                                    <p>Mountains Tours (160)</p>
                                                    <p>Advantages Tours (60)</p>
                                                    <p>Sports Tours (120)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="left-box">
                                <h6>PRICE RANGE</h6>
                                <div class="attribute price-filter">
                                    <span class="min">$30</span>
                                    <a href="#" class="slider-handle"></a>
                                    <div class="price-range"><div class="bg"></div></div>
                                    <span class="max">$5000</span>
                                </div>
                            </div>
                            <div class="left-box">
                                <h6>STAR RATING</h6>
                                <div class="rating">
                                    <ul class="list-unstyled">
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li class="has-pretty-child">
                                            <div class="clearfix prettycheckbox labelright  red"><input type="checkbox" value="None" name="pool" class="checkclass checkbox-inline" /><a href="#" class=" "></a>
                                                <label for="undefined">null</label></div>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                            <i class="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-9 mainpage">
                            <div class="row sort">
                                <div class="col-sm-3">
                                    <div class="form-group input-group input-group-sm align-items-center d-flex position-relative mb-3">
                                        <label class="input-group-addon" for="input-sort">Sort By :    </label>
                                        <div class="selec-icon">
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                        <div class="dropdown bootstrap-select form-control"><select id="input-sort" class="form-control selectpicker">
                                            <option value="" selected="selected">Categories</option>
                                            <option value="">Name (A - Z)</option>
                                            <option value="">Name (Z - A)</option>
                                            <option value="">Price (Low &gt; High)</option>
                                            <option value="">Price (High &gt; Low)</option>
                                            <option value="">Rating (Highest)</option>
                                        </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-15" aria-haspopup="listbox" aria-expanded="false" title="Categories" data-id="input-sort"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Categories</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-15" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group input-group input-group-sm position-relative mb-3">
                                        <div class="selec-icon">
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                        <div class="dropdown bootstrap-select form-control"><select id="input-name" class="form-control selectpicker">
                                            <option value="" selected="selected">Name</option>
                                            <option value="">Name (A - Z)</option>
                                            <option value="">Name (Z - A)</option>
                                        </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-16" aria-haspopup="listbox" aria-expanded="false" title="Name" data-id="input-name"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Name</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-16" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group input-group input-group-sm position-relative mb-3">
                                        <div class="selec-icon">
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                        <div class="dropdown bootstrap-select form-control"><select id="input-rating" class="form-control selectpicker">
                                            <option value="" selected="selected">Rating</option>
                                            <option value="">Name (A - Z)</option>
                                            <option value="">Name (Z - A)</option>
                                            <option value="">Price (Low &gt; High)</option>
                                        </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-17" aria-haspopup="listbox" aria-expanded="false" title="Rating" data-id="input-rating"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Rating</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-17" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="form-group input-group input-group-sm position-relative mb-3">
                                        <div class="selec-icon">
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </div>
                                        <div class="dropdown bootstrap-select form-control"><select id="input-price" class="form-control selectpicker">
                                            <option value="" selected="selected">Popularity</option>
                                            <option value="">Price (High &gt; Low)</option>
                                            <option value="">Rating (Highest)</option>
                                            <option value="">Rating (Lowest)</option>
                                            <option value="">Model (A - Z)</option>
                                            <option value="">Model (Z - A)</option>
                                        </select><button type="button" tabindex="-1" class="btn dropdown-toggle bs-placeholder btn-light" data-bs-toggle="dropdown" role="combobox" aria-owns="bs-select-18" aria-haspopup="listbox" aria-expanded="false" title="Popularity" data-id="input-price"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Popularity</div></div> </div></button><div class="dropdown-menu "><div class="inner show" role="listbox" id="bs-select-18" tabindex="-1"><ul class="dropdown-menu inner show" role="presentation"></ul></div></div></div>
                                    </div>
                                </div>
                                <div class="col-sm-3 list d-none d-sm-block">
                                    <div class="btn-group btn-group-sm float-end">
                                        <button type="button" id="grid-view" class="btn btn-default btngrid active" data-toggle="tooltip" title="Grid"><i class="fa fa-th-large" aria-hidden="true"></i></button>

                                        <button type="button" id="list-view" class="btn btn-default btngrid" data-toggle="tooltip" title="List"><i class="fa fa-list-ul" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>

                            <div class="row tour packages">
                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/01.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/02.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/03.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/01.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0"> View More </a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/02.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/03.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/01.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button">Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button"> <a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/02.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/03.jpg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/01.jpeg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/02.jpeg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="product-layout product-grid col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <a href="#"><img src="/images/packages/03.jpeg" alt="image" title="image" class="img-responsive" /></a>
                                            <div class="hoverbox">
                                                <div class="icon_plus" aria-hidden="true"></div>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <ul class="list-inline link">
                                                <li><i class="fa-regular fa-clock"></i>12 Days</li>
                                                <li><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                <li><i class="fa fa-dollar"></i> 3100</li>
                                            </ul>
                                            <div class="inner">
                                                <h4>Safari Tour</h4>
                                                <div class="rate">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                                <ul class="list-inline">
                                                    <li class="d-inline-block"><i class="fa-solid fa-location-dot"></i> South Africa</li>
                                                    <li class="d-inline-block"><i class="fa-regular fa-clock"></i>12 Days</li>
                                                </ul>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur dolor sit amet[...]</p>
                                            </div>
                                            <div class="text-left">
                                                <button type="button" >Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <button type="button" ><a href="/packages/package-details/0">View More</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                <p>$3100.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="pagination d-block">
                                <li>
                                    <a href="#" aria-label="Previous">Prev</a>
                                </li>
                                <li class="active">
                                    <a href="#"> 1</a>
                                </li>
                                <li>
                                    <a href="#"> 2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#"> 4</a>
                                </li>
                                <li>
                                    <a href="#">...</a>
                                </li>
                                <li>
                                    <a href="#">10</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Next">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Packageslist
