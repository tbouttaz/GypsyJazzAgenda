Data Import Process
===================
Pretty basic at the moment: the datasource is a spreadsheet.

Refresh data process:

1. Export spreadsheet to CSV
 - Copy rows to **Export view** tab
 - Change dates format to **Day Month**

2. Load CSV in http://www.convertcsv.com/csv-to-html.htm

3. Use this template for HTML table conversion:
```
<tr>
  <td><a target="_blank" href="{f4}">{f1}</a></td>
  <td>{f2}</td>
  <td>{f3}</td>
  <td>{f5}</td>
  <td>{f6}</td>
</tr>
```

4. Replace the *tbody* in index.html