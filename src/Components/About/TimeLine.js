import React from "react";
import { Link } from "react-router-dom";
import "../Assets/CSS/Timeline.css";

const TimeLine = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <div id="scrollspy1" className="sticky-top pl-3 text-sm">
          <ul data-te-nav-list-ref>
            <li className="py-1">
              <Link
                data-te-nav-link-ref
                data-te-nav-link-active
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                to="#example-1"
              >
                Inception
              </Link>
            </li>
            <li className="py-1">
              <Link
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                to="#example-2"
              >
                MVP
              </Link>
            </li>
            <li className="py-1">
              <Link
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                to="#example-3"
              >
                Expansion
              </Link>
            </li>
            <li className="py-1">
              <Link
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                to="#example-4"
              >
                IOT Foray
              </Link>
            </li>
            <li className="py-1">
              <Link
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                to="#example-5"
              >
                DFOS Launch
              </Link>
            </li>
            <li className="py-1">
              <Link
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                to="#example-6"
              >
                The Big Move
              </Link>
            </li>
            <li className="py-1">
              <Link
                data-te-nav-link-ref
                className="bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200"
                to="#example-7"
              >
                Growing Steadily 
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2">
        <div
          data-te-spy="scroll"
          data-te-target="#scrollspy1"
          data-te-offset="200"
          className="relative h-48 overflow-auto"
        >
          <section id="example-1">
            <h3 className="pb-3 pt-5 text-xl font-semibold">2015</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
          </section>
          <section id="example-2">
            <h3 className="pb-3 pt-5 text-xl font-semibold">2018</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
          </section>
          <section id="example-3">
            <h3 className="pb-3 pt-5 text-xl font-semibold">2019</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
          </section>
          <section id="example-4">
            <h3 className="pb-3 pt-5 text-xl font-semibold">2020</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
          </section>
          <section id="example-5">
            <h3 className="pb-3 pt-5 text-xl font-semibold">2021</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
          </section>
          <section id="example-6">
            <h3 className="pb-3 pt-5 text-xl font-semibold">2022</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
          </section>
          <section id="example-7">
            <h3 className="pb-3 pt-5 text-xl font-semibold">2023</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              earum natus vel minima quod error maxime, molestias ut. Fuga
              dignissimos nisi nemo necessitatibus quisquam obcaecati et
              reiciendis quaerat accusamus numquam.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
