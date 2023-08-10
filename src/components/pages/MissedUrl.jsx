import React from 'react'

function MissedUrl() {
  return (
    <section className="error-page section text-center bg-gray-100 border-t-2 border-gray-200 border-solid">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-12">
            {/* <!-- Error Inner --> */}
            <div className="error-inner inline-block ">
              <h1 className='text-4xl text-indigo-600 font-bold'>404
                <span className='block text-xl font-extrabold text-indigo-500'>Oop's  sorry we can't find that page!</span>
              </h1>
              <p className='p-4'>Aenean eget sollicitudin lorem, et pretium felis. Nullam euismod diam libero, sed dapibus leo laoreet ut. Suspendisse potenti. Phasellus urna lacus</p>
              <form className="search-form w-full relative">
                <input className="text-center w-[400px] h-[50px] px-4 bg-slate-100 inline-block font-normal" placeholder="Search from Here" type="text"/>
                <button class="btn" type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            {/* <!--/ End Error Inner --> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissedUrl