import React , { useEffect, useCallback, useState, useRef } from "react";
import {EventEmitter2 as Emitter} from "eventemitter2";

export default function MyComponent({visitors}) {
  const ref = useRef(null);

  const [ctx] = useState({
    emitter: new Emitter(),
    ref
  });

  // const handleSubmit = useCallback((event: FormEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   onSearch();     
  // }, [selectedTags, onSearch]);

  useEffect(() => {
    let text = [];
    console.dir(ctx)
    for (let visitor of visitors) {
      // element.addEventListener(event, callback)
      // visitor(ctx)?.();
      text.push(visitor(ctx))

      // (ctx) => {
      //   ctx.emitter.on(event, handler);
      // }
    }
    text.forEach(cb => cb?.());

  }, [ref]);

  return (
    <div className="App">
      <div>test</div>
      <button
        type="button"
        ref={ctx.ref}
        onClick={e => ctx.emitter.emit("click", e)}>
          test2
      </button>
    </div>
  );
}