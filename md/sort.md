# 排序算法

*2017-06-02*

### 冒泡排序

原理：临近的数字两两进行比较，按照从小到大或者从大到小的顺序进行交换，执行n-1趟交换后得到排序结果。

```javascript
function bubble(arr) {
    var temp
    for (var i = 0; i < arr.length; i++) { //比较多少趟，从第一趟开始
        for (var j = 0; j < arr.length - i - 1; j++) { //每一趟比较多少次数
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
```

### 插入排序

1. 从第一个元素开始，该元素可以认为已经被排序
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
5. 将新元素插入到该位置后
6. 重复步骤2~5

```javascript
function insert(arr) {
    var i, j
    for (i = 1; i < arr.length; i++) {
        for (j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                arr.splice(j, 0, arr[i])
                arr.splice(i + 1, 1)
            }
        }
    }
    return arr
}
```

