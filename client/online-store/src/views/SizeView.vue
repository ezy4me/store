<template>
    <div class="size-information container">
        <div class="category-size">
            <h2>Одежда вверх</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Размер RU</th>
                        <td>42-44</td>
                        <td>44-46</td>
                        <td>46-48</td>
                        <td class="">50-52</td>
                        <td class="">52-54</td>
                    </tr>
                    <tr>
                        <th>Размер US</th>
                        <td>XS</td>
                        <td>S</td>
                        <td>M</td>
                        <td class="">L</td>
                        <td class="">XL</td>
                    </tr>
                    <tr>
                        <th>Грудь (см)</th>
                        <td>88</td>
                        <td>88-96</td>
                        <td>96-104</td>
                        <td class="">104-112</td>
                        <td class="">112-124</td>
                    </tr>
                    <tr>
                        <th>Талия (см)</th>
                        <td>73</td>
                        <td>73-81</td>
                        <td>81-89</td>
                        <td class="">89-97</td>
                        <td class="">97-109</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="category-size">
            <h2>Одежда низ</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Размер RU</th>
                        <td>42-44</td>
                        <td>44-46</td>
                        <td class="">46-48</td>
                        <td>50-52</td>
                        <td>52-54</td>
                    </tr>
                    <tr>
                        <th>Размер US</th>
                        <td>XS</td>
                        <td>S</td>
                        <td class="">M</td>
                        <td>L</td>
                        <td>XL</td>
                    </tr>
                    <tr>
                        <th>Талия (см)</th>
                        <td>73</td>
                        <td>73-81</td>
                        <td class="">81-89</td>
                        <td>89-97</td>
                        <td>97-109</td>
                    </tr>
                    <tr>
                        <th>Бедра (см)</th>
                        <td>88</td>
                        <td>88-96</td>
                        <td class="">96-104</td>
                        <td>104-112</td>
                        <td>112-120</td>
                    </tr>
                    <tr>
                        <th>Внутренний шов (см)</th>
                        <td>82</td>
                        <td>82,5</td>
                        <td class="">83</td>
                        <td>83,5</td>
                        <td>84</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="category-size">
            <h2>Носки</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Размер RU</th>
                        <td>33-37</td>
                        <td>37-41</td>
                        <td>41-45</td>
                    </tr>
                    <tr>
                        <th>Размер EU</th>
                        <td>34-38</td>
                        <td>38-42</td>
                        <td>42-46</td>
                    </tr>
                    <tr>
                        <th>Размер US</th>
                        <td>S</td>
                        <td>M</td>
                        <td>L</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.size-information {
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
}

.size-information table {
    border-collapse: collapse;
}

.size-information tr {
    border: 1px solid #f0f0f0;
    border-left: 0;
    border-right: 0;

}

.size-information td {
    padding: 10px 15px;
    position: relative;
    color: #000;
    font-size: 15px;
}

.size-information th {
    width: 155px;
    box-sizing: border-box;
    font-size: 11px;
    font-weight: 700;
    text-align: center;
}

.category-size{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
}

</style>