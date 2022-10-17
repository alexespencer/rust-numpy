(function() {var implementors = {};
implementors["numpy"] = [{"text":"impl&lt;T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"numpy/array/struct.PyArray.html\" title=\"struct numpy::array::PyArray\">PyArray</a>&lt;T, D&gt;&gt; for Py&lt;<a class=\"struct\" href=\"numpy/array/struct.PyArray.html\" title=\"struct numpy::array::PyArray\">PyArray</a>&lt;T, D&gt;&gt;","synthetic":false,"types":["pyo3::instance::Py"]},{"text":"impl&lt;'a, T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"numpy/array/struct.PyArray.html\" title=\"struct numpy::array::PyArray\">PyArray</a>&lt;T, D&gt;&gt; for &amp;'a PyAny","synthetic":false,"types":["pyo3::types::any::PyAny"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"numpy/datetime/trait.Unit.html\" title=\"trait numpy::datetime::Unit\">Unit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"numpy/datetime/struct.Datetime.html\" title=\"struct numpy::datetime::Datetime\">Datetime</a>&lt;U&gt;","synthetic":false,"types":["numpy::datetime::Datetime"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"numpy/datetime/trait.Unit.html\" title=\"trait numpy::datetime::Unit\">Unit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"numpy/datetime/struct.Datetime.html\" title=\"struct numpy::datetime::Datetime\">Datetime</a>&lt;U&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"numpy/datetime/trait.Unit.html\" title=\"trait numpy::datetime::Unit\">Unit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>&gt; for <a class=\"struct\" href=\"numpy/datetime/struct.Timedelta.html\" title=\"struct numpy::datetime::Timedelta\">Timedelta</a>&lt;U&gt;","synthetic":false,"types":["numpy::datetime::Timedelta"]},{"text":"impl&lt;U:&nbsp;<a class=\"trait\" href=\"numpy/datetime/trait.Unit.html\" title=\"trait numpy::datetime::Unit\">Unit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"numpy/datetime/struct.Timedelta.html\" title=\"struct numpy::datetime::Timedelta\">Timedelta</a>&lt;U&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/std/primitive.i64.html\">i64</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"numpy/struct.PyArrayDescr.html\" title=\"struct numpy::PyArrayDescr\">PyArrayDescr</a>&gt; for Py&lt;<a class=\"struct\" href=\"numpy/struct.PyArrayDescr.html\" title=\"struct numpy::PyArrayDescr\">PyArrayDescr</a>&gt;","synthetic":false,"types":["pyo3::instance::Py"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"struct\" href=\"numpy/struct.PyArrayDescr.html\" title=\"struct numpy::PyArrayDescr\">PyArrayDescr</a>&gt; for &amp;'a PyAny","synthetic":false,"types":["pyo3::types::any::PyAny"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"numpy/struct.FromVecError.html\" title=\"struct numpy::FromVecError\">FromVecError</a>&gt; for PyErr","synthetic":false,"types":["pyo3::err::PyErr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"numpy/struct.NotContiguousError.html\" title=\"struct numpy::NotContiguousError\">NotContiguousError</a>&gt; for PyErr","synthetic":false,"types":["pyo3::err::PyErr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"numpy/enum.BorrowError.html\" title=\"enum numpy::BorrowError\">BorrowError</a>&gt; for PyErr","synthetic":false,"types":["pyo3::err::PyErr"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()