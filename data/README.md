Data Import Process
===================
Pretty basic at the moment: the datasource is a spreadsheet.

Refresh data process:

1. Export spreadsheet to CSV
 - Copy rows to **Export view** tab

2. Load CSV in http://www.convertcsv.com/csv-to-html.htm

3. Use this template for HTML table conversion:
```
<tr>
  <td><a target="_blank" href="{f3}">{f1}</a></td>
  <td>{f2}</td>
  <td>{f4}</td>
  <td>{f5}</td>
</tr>
```

4. Replace the *tbody* in index.html

----
Map
===

1. Add Layer in Google My Maps --> Import CSV
2. Embed on my site